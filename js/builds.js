$(document).ready(function(){$('.login').click(function(){$(this).addClass('hover');$('.login_form').addClass('shown');if(!$('.login').hasClass('intent')){$('.login').addClass('intent');$('.login,.login_form').click(function(event){event.stopPropagation();});} else if($('.login').hasClass('intent')){$('.login').removeClass('hover intent');$('.login_form').removeClass('shown');$(document).unbind('click');}$(document).click(function(){$('.login').removeClass('hover intent');$('.login_form').removeClass('shown');$(document).unbind('click');});return false;});$(".votearrows").click(function(){var b=($(this).hasClass("vup"))?"up":"down";var a=$(this).prop("title");$.get("votes.php",{vtyp:b,id:a},function(f){var c=$(".kvot.n"+a);var g=$(".nvot.n"+a);var e=parseInt(c.text());var h=parseInt(g.text())+1;if(f=="up"){c.text(e+5);g.text(h)}else{if(f=="down"){c.text(e-3);g.text(h)}else{var d=$(".tvut.n"+a);d.removeClass("hidden").css("display","inline").fadeOut(2000,function(){d.addClass("hidden")})}}})});$('.favorites').click(function(){var k=$(this);var saveid=$(this).prop('href').split('#')[1];$.get("fave.php",{fave:saveid},function(f){if(f == 'success'){k.parent().html('favorited');}else{return false;}});return false;});$(".tip").tipTip({delay:50,defaultPosition:'left',content:'<div>For "range" and "values between"</div><div>use a "<strong>:</strong>"(colon) to determine the</div><div>range values <br><br> Example:<br>For range<br> 125:5 would give builds from 120 through 130<br><br>For between<br>110:130 would give builds between 110 and 130</div>'});$('#svals').numeric({allow:':'});});