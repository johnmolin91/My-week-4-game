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
	var hpMario = 100;
	var hpLuigi = 100;
	var hpToad = 100;
	var hpBowser = 100;
	var attackMario = 10;
	var attackLuigi = 10;
	var attackToad = 10;
	var attackBowser = 10;
	var counterMario = 20;
	var counterLuigi = 20;
	var counterToad = 20;
	var counterBowser = 20;
	var attack = 0;
	var counterAttack = 0;

	$("#mario").on("click", function clickMario() {
		if (charChosen == false) {
			charChosen = true;
			marioHero = true;
			heroChosen = "Mario";
			attack = attackMario;
			$("#heroSelect").append(marioDiv);
			$("#enemiesSelect").append(luigiDiv, toadDiv, bowserDiv);
		}
		if (charChosen == true && marioHero == false && defenderChosen == false) {
			defenderSelect = "Mario";
			defenderChosen = true;
			counterAttack = counterMario;
			$("#defenderSelect").append(marioDiv);
		}
	})

	$("#luigi").on("click", function clickLuigi() {
		if (charChosen == false) {
			charChosen = true;
			luigiHero = true;
			heroChosen = "Luigi";
			attack = attackLuigi;
			$("#heroSelect").append(luigiDiv);
			$("#enemiesSelect").append(marioDiv, toadDiv, bowserDiv);
		}
		if (charChosen == true && luigiHero == false && defenderChosen == false) {
			defenderSelect = "Luigi";
			defenderChosen = true;
			counterAttack = counterLuigi;
			$("#defenderSelect").append(luigiDiv);
		}
	})

	$("#toad").on("click", function clickToad() {
		if (charChosen == false) {
			charChosen = true;
			toadHero = true;
			heroChosen = "Toad";
			attack = attackToad;
			$("#heroSelect").append(toadDiv);
			$("#enemiesSelect").append(marioDiv, luigiDiv, bowserDiv);
		}
		if (charChosen == true && toadHero == false && defenderChosen == false) {
			defenderSelect = "Toad";
			defenderChosen = true;
			counterAttack = counterToad;
			$("#defenderSelect").append(toadDiv);
		}
	})

	$("#bowser").on("click", function clickBowser() {
		if (charChosen == false) {
			charChosen = true;
			bowserHero = true;
			heroChosen = "Bowser";
			attack = attackBowser;
			$("#heroSelect").append(bowserDiv);
			$("#enemiesSelect").append(marioDiv, luigiDiv, toadDiv);
		}
		if (charChosen == true && bowserHero == false && defenderChosen == false) {
			defenderSelect = "Bowser";
			defenderChosen = true;
			counterAttack = counterBowser;
			$("#defenderSelect").append(bowserDiv);
		}
	})

	$("#attack").on("click", function() {
		if (charChosen == true && defenderChosen == true) {
			$("#fightText").text(heroChosen + " has attacked " + defenderSelect + " for " + attack + " damage.");
			$("#counterText").text(defenderSelect + " counter attacks for " + counterAttack + " damage.");
		}
		if (heroChosen == "Mario") {
			hpMario = hpMario - counterAttack;
			$("#marioHP").text(hpMario);
		}
	})

})