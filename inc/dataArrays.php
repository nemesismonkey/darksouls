<?php
	
	
	
	
	function returnArmor($h,$c,$a,$f){
		
		$headPiece = Array(
			"Naked","Standard Helm","Chain Helm","Knight Helm","Elite Knight Helm","Wanderer hood","Thief Mask","Brigand Hood","Pharis's Hat","Sorcerer Hat","Black Sorcerer Hat","Tattered Cloth Hood","Priest's Hat","Cleric Helm","Iron Helm","Black Iron Helm","Helm of the Wise","Catarina Helm","Crystalline Helm","Brass Helm","Big Hat","Mask of the Sealer","Witch Hat","Crown of Dusk","Gold-Hemmed Black Hood","Mask of Velka","Maiden Hood","Dingy Hood","Eastern Helm","Shadow Mask","Hollow Warrior Helm","Hollow Soldier Helm","Balder Helm","Steel Helm","Hollow Thief's Hood","Silver Knight Helm","Black Knight Helm","Giant Helm","Six-Eyed Helm of the Channelers","Painting Guardian Hood","Golem Helm","Smough's Helm","Ornstein's Helm","Crown of the Dark Sun","Crown of the Great Lord","Dark Mask","Helm of Thorns","Helm of Favor","Paladin Helm","Stone Helm","Havel's Helm","Xanthous Crown","Fang Boar Helm","Gargoyle Helm","Sunlight Maggot","Symbol of Avarice","Sack","Royal Helm","Mask of the Father","Mask of the Mother","Mask of the Child","Snickering Top Hat","Helm of Artorias","Gough's Helm","Porcelain Mask","Guardian Helm","Bloated Head","Bloated Sorcerer Head"
		);
		$chestPiece = Array(
			"Naked","Hard Leather Armor","Chain Armor","Knight Armor","Elite Knight Armor","Wanderer Coat","Black Leather Armor","Brigand Armor","Leather Armor","Sorcerer Cloak","Black Sorcerer Cloak","Tattered Cloth Robe","Holy Robe","Cleric Armor","Armor of the Sun","Black Iron Armor","Armor of the Glorious","Catarina Armor","Crystalline Armor","Brass Armor","Sage Robe","Crimson Robe","Witch Cloak","Antiquated Dress","Gold-Hemmed Black Cloak","Black Cleric Robe","Maiden Robe","Dingy Robe","Eastern Armor","Shadow Garb","Hollow Warrior Armor","Hollow Soldier Armor","Balder Armor","Steel Armor","Hollow Thief's Leather Armor","Silver Knight Armor","Black Knight Armor","Giant Armor","Robe of the Channelers","Painting Guardian Robe","Golem Armor","Smough's Armor","Ornstein's Armor","Moonlight Robe","Robe of the Great Lord","Dark Armor","Armor of Thorns","Embraced Armor of Favor","Paladin Armor","Stone Armor","Havel's Armor","Xanthous Overcoat","Chester's Long Coat","Armor of Artorias","Gough's Armor","Lord's Blade Robe","Guardian Armor"
		);
		$armPiece = Array(
			"Naked","Hard Leather Gauntlets","Leather Gauntlets","Knight Gauntlets","Elite Knight Gauntlets","Wanderer Manchette","Black Leather Gloves","Brigand Gauntlets","Leather Gloves","Sorcerer Gauntlets","Black Sorcerer Gauntlets","Tattered Cloth Manchette","Travelling Gloves","Cleric Gauntlets","Iron Bracelet","Black Iron Gauntlets","Gauntlets of the Vanquisher","Catarina Gauntlets","Crystalline Gauntlets","Brass Gauntlets","Traveling Gloves","Crimson Gloves","Witch Gloves","Antiquated Gloves","Gold-Hemmed Black Gloves","Black Manchette","Maiden Gloves","Dingy Gloves","Eastern Gauntlets","Shadow Gauntlets","Balder Gauntlets","Steel Gauntlets","Silver Knight Gauntlets","Black Knight Gauntlets","Giant Gauntlets","Gauntlets of the Channelers","Painting Guardian Gloves","Golem Gauntlets","Smough's Gauntlets","Ornstein's Gauntlets","Moonlight Gloves","Bracelet of the Great Lord","Dark Gauntlets","Gauntlets of Thorns","Gauntlets of Favor","Paladin Gauntlets","Stone Gauntlets","Havel's Gauntlets","Xanthous Gloves","Chester's Gloves","Gauntlets of Artorias","Gough's Gauntlets","Lord's Blade Gloves","Guardian Gaunlets"
		);
		$footPiece = Array(
			"Naked","Hard Leather Boots","Chain Leggings","Knight Leggings","Elite Knight Leggings","Wanderer Boots","Black Leather Boots","Brigand Trousers","Leather Boots","Sorcerer Boots","Black Sorcerer Boots","Heavy Boots","Holy Trousers","Cleric Leggings","Iron Leggings","Black Iron Leggings","Boots of the Explorer","Catarina Leggings","Crystalline Leggings","Brass Leggings","Traveling Boots","Crimson Waistcloth","Witch Skirt","Antiquated Skirt","Gold-Hemmed Black Skirt","Black Tights","Maiden Skirt","Blood-Stained Skirt","Eastern Leggings","Shadow Leggings","Hollow Warrior Waistcloth","Hollow Soldier Waistcloth","Balder Leggings","Steel Leggings","Hollow Thief's Tights","Silver Knight Leggings","Black Knight Leggings","Giant Leggings","Waistcloth of the Channelers","Painting Guardian Waistcloth","Golem Leggings","Smough's Leggings","Ornstein's Leggings","Moonlight Waistcloth","Anklet of the Great Lord","Dark Leggings","Leggings of Thorns","Leggings of Favor","Paladin Leggings","Stone Leggings","Havel's Leggings","Xanthous Waistcloth","Chester's Trousers","Leggings of Artorias","Gough's Leggings","Lord's Blade Waistcloth","Guardian Leggings"
		);
		return Array ('head'=>$headPiece[$h],'chest'=>$chestPiece[$c],'arms'=>$armPiece[$a],'legs'=>$footPiece[$f]);
	}
	
	function returnRings($slot1,$slot2){
		$ringList = Array(
			"No Ring","Tiny Being's Ring","Cloranthy Ring","Havel's Ring","Ring of Steel Protection","Spell Stoneplate Ring","Flame Stoneplate Ring","Thunder Stoneplate Ring","Speckled Stoneplate Ring","Bloodbite Ring","Poisonbite Ring","Cursebite Ring","Red Tearstone Ring","Blue Tearstone Ring","Bellowing Dragoncrest Ring","Lingering Dragoncrest Ring","Slumbering Dragoncrest Ring","Dusk Crown Ring","White Seance Ring","Dark Moon Seance Ring","Ring of the Sun's Firstborn","Leo Ring","Wolf Ring","Hawk Ring","Hornet Ring","Dark Wood Grain Ring","Rusted Iron Ring","Covetous Gold Serpent Ring","Covetous Silver Serpent Ring","Orange Charred Ring","Ring of Fog","Ring of Favor and Protection","Ring of the Evil Eye","East Wood Grain Ring","Ring of the Sun Princess","Calamity Ring","Covenant of Artorias","Cat Covenant Ring","Darkmoon Blade Covenant Ring","Ring of Sacrifice","Rare Ring of Sacrifice"
		);
		
		return Array('slot1'=>$ringList[$slot1],'slot2'=>$ringList[$slot2]);
	}
	
	function returnWeapons($lh1,$rh1,$lh2,$rh2,$lh1Type,$rh1Type,$lh2Type,$rh2Type,$lh1Arrow,$rh1Arrow,$lh2Arrow,$rh2Arrow){
		$weaponList = Array(
			"Bare Fist","Cestus","Claw","Dragon Bone Fist","Dark Hand","Dagger","Parrying Dagger","Bandit's Knife","Ghost Blade","Priscilla's Dagger","Shortsword","Longsword","Broadsword","Broken Straight Sword","Balder Side Sword","Sunlight Straight Sword","Barbed Straight Sword","Darksword","Straight Sword Hilt","Crystal Straight Sword","Silver Knight Str. Swd.","Astora's Str. Sword","Drake Sword","Bastard Sword","Claymore","Man-Serpent Greatsword","Flamberge","Crystal Greatsword","Black Knight Sword","Stone Greatsword","Curse Gsword of Artorias","Greatsword of Artorias","Great Lord Greatsword","Moonlight Greatsword","Zweihander","Greatsword","Demon Great Machete","Black Knight Greatsword","Dragon Greatsword","Scimitar","Falchion","Shotel","Painting Guardian Sword","Jagged Ghost Blade","Quelaag's Furysword","Uchigatana","Washing Pole","Iaito","Chaos Blade","Server","Murakumo","Gravelord Sword","Mail Breaker","Rapier","Estoc","Ricard's Rapier","Velka's Rapier","Hand Axe","Battle Axe","Butcher Knife","Gargoyle Tail Axe","Crescent Axe","Golem Axe","Greataxe","Demon's Greataxe","Black Knight Greataxe","Dragon King Greataxe","Club","Mace","Morning Star","War Pick","Pickaxe","Reinforced Club","Blacksmith Hammer","Blacksmith Giant Hammer","Hammer of Vamos","Great Club","Demon's Great Hammer","Large Club","Grant","Dragon Tooth","Smough's Hammer","Spear","Winged Spear","Partizan","Pike","Channeler's Trident","Demon's Spear","Silver Knight Spear","Moonlight Butterfly Horn","Dragonslayer Spear","Halberd","Gargoyle's Halberd","Lucerne","Scythe","Great Scythe","Giant's Halberd","Titanite Catch Pole","Black Knight Halberd","Lifehunt Scythe","Whip","Notched Whip","Darkmoon Bow","Dragonslayer Greatbow","Short Bow","Composite Bow","Longbow","Black Bow of Pharis","Light Crossbow","Heavy Crossbow","Sniper Crossbow","Avelyn","Pyromancy Flame","Pyromancy Flame +15","Ascended Flame +5","Sorcerer's Catalyst","Beatrice's Catalyst","Logan's Catalyst","Oolacile Ivory Catalyst","Demon's Catalyst","Izalith Catalyst","Tin Banishment Catalyst","Tin Crystallization Catalyst","Tin Darkmoon Catalyst","Talisman","Canvas Talisman","Thorolund Talisman","Ivory Talisman","Sunlight Talisman","Darkmoon Talisman","Velka's Talisman","Warrior's Round Shield","Caduceus Round Shield","Red/White Rnd Shield","Cracked Round Shield","Plank Shield","Small Leather Shield","Leather Shield ","Buckler","Target Shield","Crystal Ring Shield","Effigy Shield","East-West Shield","Wooden Shield","Large Leather Shield","Heater Shield","Tower Kite Shield","Caduceus Kite Shield","Hollow Soldier Shield","Knight Shield","Sanctus","Balder Shield","Spider Shield","Grass Crest Shield","Bloodshield","Iron Round Shield","Sunlight Shield","Pierce Shield","Spiked Shield","Gargoyle's Shield","Crystal Shield","Crest Shield","Dragon Crest Shield","Silver Knight Shield","Black Knight Shield","Black Iron Greatshield","Eagle Shield","Tower Shield","Giant Shield","Bonewheel Shield","Stone Greatshield","Havel's Greatshield","Greatshield of Artorias","Dark Silver Tracer","Abyss Greatsword","Obsidian Greatsword","Gold Tracer","Stone Greataxe","Four-Pronged Plow","Guardian Tail","Gough's Greatbow","Oolacile Catalyst","Manus Catalyst","Cleansing Greatshield","Skull Lantern"
		);
		
		return Array(
			'lh1'=>Array(
				'weapon'=>$weaponList[$lh1],
				'upgrade'=>ucwords($lh1Type),
				'type'=>isTyp($lh1),
				'arrow'=>ucwords($lh1Arrow)
			),
			'rh1'=>Array(
				'weapon'=>$weaponList[$rh1],
				'upgrade'=>ucwords($rh1Type),
				'type'=>isTyp($rh1),
				'arrow'=>ucwords($rh1Arrow)
			),
			'lh2'=>Array(
				'weapon'=>$weaponList[$lh2],
				'upgrade'=>ucwords($lh2Type),
				'type'=>isTyp($lh2),
				'arrow'=>ucwords($lh2Arrow)
			),
			'rh2'=>Array(
				'weapon'=>$weaponList[$rh2],
				'upgrade'=>ucwords($rh2Type),
				'type'=>isTyp($rh2),
				'arrow'=>ucwords($rh2Arrow)
			)
		);
	}
	function isTyp($index){
		$weapon = 'Weapon';
		if($index >= 102 && $index <= 111 || $index == 180)
			$weapon = 'Bow';
		elseif($index >= 112 && $index <= 130 || $index == 181 || $index == 182)
			$weapon = 'Magic';
		elseif($index >= 131 && $index <= 172 || $index == 183)
			$weapon = 'Shield';
		
		return $weapon;
	}
	
	function returnSpells($s1,$s2,$s3,$s4,$s5,$s6,$s7,$s8,$s9,$s10,$s11,$s12){
		$spellList = Array(
			"No Spell","Soul Arrow","Great Soul Arrow","Heavy Soul Arrow","Great Heavy Soul Arrow","Homing Soulmass","Hush","Cast Light","Soul Spear","Crystal Soul Spear","Crystal Magic Weapon","Homing Crystal Soulmass","Remedy","Resist Curse","Repair","Hidden Body","Chameleon","Hidden Weapon","Magic Shield","Strong Magic Shield","Magic Weapon","Great Magic Weapon","Aural Decoy","White Dragon Breath","Fall Control","Fireball","Fire Orb","Great Fireball","Flash Sweat","Combustion","Great Combustion","Fire Whip","Chaos Fire Whip","Fire Surge","Acid Surge","Firestorm","Chaos Storm","Fire Tempest","Great Chaos Fireball","Power Within","Iron Flesh","Poison Mist","Toxic Mist","Undead Rapport","Force","Emit Force","Wrath of the Gods","Heal","Great Heal Excerpt","Great Heal","Soothing Sunlight","Replenishment","Bountiful Sunlight","Lightning Spear","Great Lightning Spear","Sunlight Spear","Homeward","Magic Barrier","Great Magic Barrier","Seek Guidance","Karmic Justice","Darkmoon Blade","Tranquil Walk of Peace","Vow of Silence","Gravelord Sword Dance","Gravelord Greatsword Dance","Sunlight Blade","Dark Orb","Dark Fog","Dark Bead","Pursuers","Black Flame"
		);
		$spellNums = Array($s1,$s2,$s3,$s4,$s5,$s6,$s7,$s8,$s9,$s10,$s11,$s12);
		$narry = Array();
		for($i = 0;$i<12;$i++){
			$narry['slot'.($i+1)] = $spellList[$spellNums[$i]];
		}
		return $narry;
	}
	
	function returnDetails($deats){
		return Array('id'=>$deats['id'],'author'=>$deats['auth'],'title'=>$deats['title'],'ref'=>$deats['ref'],'date'=>$deats['time'],'numvotes'=>$deats['numvotes'],'rating'=>$deats['totalof'],'description'=>$deats['desci'],'views'=>$deats['numviews']);
	}
	
	function returnCov($cov){
		$covArray = Array(
			false,
			'Way of White',
			'Princess Guard',
			'Blade of the Darkmoon',
			'Warrior of Sunlight',
			'Forest Hunter',
			'Chaos Servant',
			'Gravelord Servant',
			'Path of the Dragon',
			'Darkwraith'
		);
		return $covArray[$cov];
	}
	
?>