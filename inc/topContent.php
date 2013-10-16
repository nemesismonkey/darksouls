<?php
require('inc/contype.php');
include('dataArrays.php');
function parseData($b64String = false,$queryArray = false){
	if($b64String && $queryArray) {
		$rAry = Array();
		$dA = explode(',',$b64String);
		
		$rAry['details'] = returnDetails($queryArray);
		$rAry['class'] = ucwords($dA[0]);
		$rAry['covn'] = returnCov($dA[37]);
		$rAry['sl'] = $queryArray['soullevel'];
		
		$rAry['vt'] = $dA[1];
		$rAry['att'] = $dA[2];
		$rAry['end'] = $dA[3];
		$rAry['str'] = $dA[4];
		$rAry['dex'] = $dA[5];
		$rAry['res'] = $dA[6];
		$rAry['int'] = $dA[7];
		$rAry['fai'] = $dA[8];
		$rAry['hum'] = $dA[9];
		
		$rAry['armor'] = returnArmor($dA[10],$dA[11],$dA[12],$dA[13]);
		
		$rAry['rings'] = returnRings($dA[14],$dA[15]);
		
		$rAry['weapons'] = returnWeapons($dA[16],$dA[17],$dA[18],$dA[19],$dA[20],$dA[21],$dA[22],$dA[23],$dA[38],$dA[39],$dA[40],$dA[41]);
		
		$rAry['spells'] = returnSpells($dA[25],$dA[26],$dA[27],$dA[28],$dA[29],$dA[30],$dA[31],$dA[32],$dA[33],$dA[34],$dA[35],$dA[36]);
		//preEcho($rAry);
		//preEcho($dA);
		return $rAry;
	}
}
function makeItem($arry = false,$rank = false,$views = false){
	if($arry && $rank){
		$str = "<div class='featBuild clearfix'>";
		$str .= "<div class='rank'>".$rank.'</div>';
		$str .= '<h2> <a href="/darksouls/?c='.$arry['details']['ref'].'">'.$arry['details']['title'].'</a> by '. $arry['details']['author'] .($views === false ? ' (Rated '. $arry['details']['rating'] .' with '. $arry['details']['numvotes'] .' votes)' : ' ('.$views.' total times viewed)').'</h2>';
		
		$str .= "<div class='statList'>
		<ul>
			<li>Vitality <span>".$arry['vt']."</span></li>
			<li>Attunement <span>".$arry['att']."</span></li>
			<li>Endurance <span>".$arry['end']."</span></li>
			<li>Strength <span>".$arry['str']."</span></li>
			<li>Dexterity <span>".$arry['dex']."</span></li>
			<li>Resistance <span>".$arry['res']."</span></li>
			<li>Intelligence <span>".$arry['int']."</span></li>
			<li>Faith <span>".$arry['fai']."</span></li>	
		</ul>
		</div>";
		
		$str .= "<div class='bdetails'>Level ".$arry['sl']." ".$arry['class'].($arry['covn'] ? ' :: '.$arry['covn'] : '')."</div> <hr class='nomarg'>";
		$str .= "<div class='gearg'>
			<div class='titlem'>Armor</div>
			<div>".$arry['armor']['head']."</div>
			<div>".$arry['armor']['chest']."</div>
			<div>".$arry['armor']['arms']."</div>
			<div>".$arry['armor']['legs']."</div>
			<br/>
		</div>";
		$weps = $arry['weapons'];
		$str .= "<div class='gearg'>
			<div class='titlem'>Weapons</div>
			<div>LH1: ".outputWep($weps['lh1'])."</div>
			<div>RH1: ".outputWep($weps['rh1'])."</div>
			<div>LH2: ".outputWep($weps['lh2'])."</div>
			<div>RH2: ".outputWep($weps['rh2'])."</div>
			<br/>
		</div>";
		
		$str .= "<div class='spell-desc'>";
			$spells = $arry['spells'];
			$sLen = '';
			for($i = 1,$len = count($spells);$i<=$len;$i++){
				$r = 'slot'.$i;
				$sp = $spells[$r];
				if($sp != 'No Spell')
					$sLen .= '<li>'.$sp.'</li>';
			}
		if(strlen($sLen) > 0){
			$str .= '<div class="titlem">Spells</div><ul class="spelly clearfix">'. $sLen .'</ul>';
		}
		
		
		$str .= "</div>";
		if(strlen($arry['details']['description']) > 0){
			$str .= '<div class="desci"><div class="titlem"><br/>Author remarks</div><p class="descii">'.stripslashes($arry['details']['description']).'</p></div>';
		}
		$str .= '</div>';
		
		return $str;
	}
}
function preEcho($string){
	echo '<pre>';
	print_r($string);
	echo '</pre>';
}
function outputWep($wep){
	$weapon = $wep['weapon'];
	$path = $wep['upgrade'];
	$type = $wep['type'];
	//$arrow = $wep['arrow'];
	
	$output = '';
	if($path != 'Normal' && $type != 'Magic')
		return $path.' '.$weapon;
	return $weapon;
	
}
echo '<div class="buildList" style="width:auto;margin:8px;">';
echo '<style>
.featBuild:nth-of-type(2n+1) {
    background: none repeat scroll 0 0 #E7E7E7;
    border-radius: 3px 3px 3px 3px;
}
.featBuild {
    border-radius: 4px 4px 4px 4px;
	padding:7px 7px 7px 55px;
	position:relative;
	margin: 5px 0;
}
.featBuild h2{
	padding-top:0;
	margin:0 10px 5px 0;
}
.rank{
	position:absolute;
	top:50%;
	left:0;
	width:55px;
	text-align:center;
	font-size:18px;
	font-weight:bold;
	font-family:Verdana,sans-serif;
	margin-top:-12px;
}
.bdetails{
	font-size:15px;
	font-weight:bold;
}
.statList{
	float:right;
	clear:none;
	width:250px;
	margin-right:20px;
	padding:0 0 10px 10px;
}
.statList ul, .spelly{
	list-style:none;
	padding:0;
	margin:0;
}
.statList ul li{
	border-bottom:dotted 1px #ccc;
	font-weight:bold;
}
.statList ul li span{
	float:right;margin-right:10px;
	color:#2093CF;
}
.gearg{
	float:left;
	clear:none;
	width:247px;
	font-size:12px;
	font-family:Verdana,sans-serif;
	
}
.gearg div{
	width:100%;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.nomarg {
	margin:5px 0;
	padding:0;
	width:500px;
	border:none;
	border-bottom:dotted 1px #ccc;
}
.titlem{
	font-weight:bold;
	font-family:Arial,sans-serif;
}
.spelly li{
	float:left;
	clear:none;
	width:240px;
	
}
.spell-desc{
	margin-top:10px;
	font-size:12px;
	font-family:Verdana,sans-serif;
	width:500px;
}
.descii {
	font-size:13px;
}
</style>';

$title = 'the past week';
$per = 'last sunday - 7 days';
$tot = 'last sunday';
$g = false;
if(isset($_GET['period'])) {
	switch($_GET['period']){
		case('week'):
			$title = 'the past week';
			$per = 'last sunday - 7 days';
		break;
		case('month'):
			$title = 'the past month';
			$per = 'last sunday - 30 days';
		break;
		case('alltime'):
			$title = 'all time';
			$per = 'last sunday - 5 years';
		break;
		case('today'):
			$title = 'today';
			$per = 'today EST - 24 hours';
			$tot = 'today EST';
			$g = true;
		break;
		case('views'):
			$title = 'views';
			$per = '';
			$tot = '';
			$g = true;
		break;
	}
}


ob_start();
if($title != 'views')
	echo '<h1 class="nomargin">Top {qqq} highest rated builds of '.$title.'</h1><hr>';
else
	echo '<h1 class="nomargin">Top {qqq} most viewed builds</h1><hr>';
	echo '<div class="small faded" style="margin-top:-5px">
		'.($title == 'the past week' ? 'Past Week' : '<a href="/darksouls/top?period=week">Past Week</a>').' | 
		'.($title == 'the past month' ? 'Past Month' : '<a href="/darksouls/top?period=month">Past Month</a>').' | 
		'.($title == 'all time' ? 'All Time' : '<a href="/darksouls/top?period=alltime">All Time</a>').' | 
		'.($title == 'today' ? 'Today' : '<a href="/darksouls/top?period=today">Today</a>').' :: 
		
		'.($title == 'views' ? 'Most Views' : '<a href="/darksouls/top?period=views">Most Views</a>').'
		
		</div>';
		$sd = '`s`.id,`s`.auth,`s`.title,`s`.ref,`s`.time,`s`.soullevel,`s`.numvotes,`s`.totalof,`s`.desci,`s`.numviews,`s`.b64';
		if($title != 'all time' && $title != 'views'){
		$endPeriod = date('Y-m-d ' . ($g ? 'H:i:s' : '23:59:59'),strtotime($tot));
		$startPeriod = date('Y-m-d H:i:s',strtotime($per));
		$res = "SELECT v.id,v.`date`,v.buildid,COUNT(v.id) as c,$sd FROM `voted` as v INNER JOIN `saved_builds` as s ON v.buildid = s.ref WHERE `s`.time >= '$startPeriod' AND `s`.time <= '$endPeriod' GROUP BY `v`.`buildid` ORDER BY `s`.totalof DESC LIMIT 0,30";
		} elseif($title != 'views') {
			$res = "SELECT $sd FROM `saved_builds` as s ORDER BY `s`.totalof DESC LIMIT 0,30";
		}else
			$res = "SELECT $sd FROM `saved_builds` as s ORDER BY `s`.numviews DESC LIMIT 0,30";
		//$res = "SELECT $sd FROM saved_builds as s ORDER BY id DESC LIMIT 20";
		$res = mysql_query($res);
		//echo mysql_num_rows($res);
		$rank = 1;
		$views = false;
		while($ro = mysql_fetch_assoc($res)){
			if($title == 'views')
				$views = $ro['numviews'];
			$d = makeItem(parseData(base64_decode($ro['b64']),$ro),$rank,$views);
			echo $d;
			$rank++;
		}
	if(($rank - 1) == 0)
	echo '<div class="center"><h1>No Builds were found..  darn</h1></div>';
	
echo '</div>';
$c = ob_get_contents();
 ob_end_clean();
	echo preg_replace('/\{qqq\}/',($rank - 1),$c,1);

?>