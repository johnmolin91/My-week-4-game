$(document).ready(function() {

	var marioHero = false;
	var luigiHero = false;
	var toadHero = false;
	var bowserHero = false;
	var heroChosen;
	var defenderSelect;
	var marioDiv = $("#mario");
	var luigiDiv = $("#luigi");
	var toadDiv = $("#toad");
	var bowserDiv = $("#bowser");
	var charChosen = false;
	var defenderChosen = false;
	var hpMario = 200;
	var hpLuigi = 190;
	var hpToad = 150;
	var hpBowser = 220;
	var attackMario = 0;
	var attackLuigi = 0;
	var attackToad = 0;
	var attackBowser = 0;
	var counterMario = 20;
	var counterLuigi = 25;
	var counterToad = 30;
	var counterBowser = 20;
	var attack = 0;
	var counterAttack = 0;
	var heroHP = 0;
	var defenderHP = 0;
	var defenderDefeat = false;
	var defeatCount = 0;

	$("#mario").on("click", function clickMario() {
		if (charChosen == false) {
			charChosen = true;
			marioHero = true;
			heroChosen = "Mario";
			heroHP = hpMario;
			attack = attackMario;
			$("#heroSelect").append(marioDiv);
			$("#enemiesSelect").append(luigiDiv, toadDiv, bowserDiv);
		}
		if (charChosen == true && marioHero == false && defenderChosen == false) {
			defenderSelect = "Mario";
			defenderChosen = true;
			defenderHP = hpMario;
			counterAttack = counterMario;
			$("#defenderSelect").append(marioDiv);
		}
	})

	$("#luigi").on("click", function clickLuigi() {
		if (charChosen == false) {
			charChosen = true;
			luigiHero = true;
			heroChosen = "Luigi";
			heroHP = hpLuigi;
			attack = attackLuigi;
			$("#heroSelect").append(luigiDiv);
			$("#enemiesSelect").append(marioDiv, toadDiv, bowserDiv);
		}
		if (charChosen == true && luigiHero == false && defenderChosen == false) {
			defenderSelect = "Luigi";
			defenderChosen = true;
			defenderHP = hpLuigi;
			counterAttack = counterLuigi;
			$("#defenderSelect").append(luigiDiv);
		}
	})

	$("#toad").on("click", function clickToad() {
		if (charChosen == false) {
			charChosen = true;
			toadHero = true;
			heroChosen = "Toad";
			heroHP = hpToad;
			attack = attackToad;
			$("#heroSelect").append(toadDiv);
			$("#enemiesSelect").append(marioDiv, luigiDiv, bowserDiv);
		}
		if (charChosen == true && toadHero == false && defenderChosen == false) {
			defenderSelect = "Toad";
			defenderChosen = true;
			defenderHP = hpToad;
			counterAttack = counterToad;
			$("#defenderSelect").append(toadDiv);
		}
	})

	$("#bowser").on("click", function clickBowser() {
		if (charChosen == false) {
			charChosen = true;
			bowserHero = true;
			heroChosen = "Bowser";
			heroHP = hpBowser;
			attack = attackBowser;
			$("#heroSelect").append(bowserDiv);
			$("#enemiesSelect").append(marioDiv, luigiDiv, toadDiv);
		}
		if (charChosen == true && bowserHero == false && defenderChosen == false) {
			defenderSelect = "Bowser";
			defenderChosen = true;
			defenderHP = hpBowser;
			counterAttack = counterBowser;
			$("#defenderSelect").append(bowserDiv);
		}
	})

	function attackIncrease() {
		if (heroChosen == "Mario") {
			attack += 10;
		} else if (heroChosen =="Luigi") {
			attack += 12;
		} else if (heroChosen =="Toad") {
			attack += 13;
		} else if (heroChosen =="Bowser") {
			attack += 8;
		}
	}

	$("#attack").on("click", function() {
		if (heroHP > 0 && defenderHP > 0 && defenderChosen == true){
			attackIncrease();
				if (heroChosen == "Mario") {
					if (defenderHP > attack) {
						hpMario = hpMario - counterAttack;
						heroHP = heroHP - counterAttack;
						$("#marioHP").text(hpMario);
						if (heroHP <= 0) {
							$(".your").text("Game Over!");
						}
					}
				}
				if (heroChosen == "Luigi") {
					if (defenderHP > attack) {
						hpLuigi = hpLuigi - counterAttack;
						heroHP = heroHP - counterAttack;
						$("#luigiHP").text(hpLuigi);
						if (heroHP <= 0) {
							$(".your").text("Game Over!");
						}
					}
				}
				if (heroChosen == "Toad") {
					if (defenderHP > attack) {
						hpToad = hpToad - counterAttack;
						heroHP = heroHP - counterAttack;
						$("#toadHP").text(hpToad);
						if (heroHP <= 0) {
							$(".your").text("Game Over!");
						}
					}
				}
				if (heroChosen == "Bowser") {
					if (defenderHP > attack) {
						hpBowser = hpBowser - counterAttack;
						heroHP = heroHP - counterAttack;
						$("#bowserHP").text(hpBowser);
						if (heroHP <= 0) {
							$(".your").text("Game Over!");
						}
					}
				}
				if (defenderSelect == "Mario") {
					hpMario = hpMario - attack;
					defenderHP = defenderHP - attack;
					$("#marioHP").text(hpMario);
				}
				if (defenderSelect == "Luigi") {
					hpLuigi = hpLuigi - attack;
					defenderHP = defenderHP - attack;
					$("#luigiHP").text(hpLuigi);
				}
				if (defenderSelect == "Toad") {
					hpToad = hpToad - attack;
					defenderHP = defenderHP - attack;
					$("#toadHP").text(hpToad);
				}
				if (defenderSelect == "Bowser") {
					hpBowser = hpBowser - attack;
					defenderHP = defenderHP - attack;
					$("#bowserHP").text(hpBowser);
				}
			if (charChosen == true) {
				$("#fightText").text(heroChosen + " has attacked " + defenderSelect + " for " + attack + " damage.");
				$("#counterText").text(defenderSelect + " counter attacks for " + counterAttack + " damage.");
			}
			if (defenderHP <= 0) {
				$("#defenderSelect").empty();
				$("#counterText").text("You've defeated " + defenderSelect + ".");
				defenderChosen = false;
				defeatCount++;
			}
			if (defeatCount > 2) {
				$("#counterText").text("You win!");
			}
		}
	})
})