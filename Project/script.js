var characterPoints = 100;
var enemyPoints = 100;
var attackPoints = 10;
var characterMedalImg = document.getElementById("character-img"); 
var enemyImg = document.getElementById("enemy-img");
var textResultEnemy = document.getElementById("text-result-enemy");
var textResultCharacter = document.getElementById("text-result-character");

display();

function display() {
	document.getElementById("character-points").innerHTML = `<b>Points: </b> ${characterPoints}`;
	document.getElementById("enemy-points").innerHTML = `<b>Points: </b> ${enemyPoints}`;
	document.getElementById("status").innerHTML = `<h2>Playing...</h2>`;
}

function attack(identifyCharacter) {
	switch(identifyCharacter){
		case 'enemy':
			var newPoints = characterPoints - attackPoints;
			characterPoints = newPoints;
			break;
		case 'character':
			var newPoints = enemyPoints - attackPoints;
			enemyPoints = newPoints;
			break;
	}	
	display();
	if(characterPoints <= 0 || enemyPoints <= 0) {
		displayButton("none");
		document.getElementById("status").innerHTML = `<h2>Game Over...</h2> <button onclick="restart()"> Restart </button>`;
		evaluateResults();	
	}
}

function restart() {
	characterPoints = 100;
	enemyPoints = 100;
	display();
	displayButton("block");
	displayMedal("none");
	textResultEnemy.style.display = "none";
	textResultCharacter.style.display = "none";
	enemyImg.src= "images/player2.gif";
	characterMedalImg.src= "images/player1.gif";
}

function evaluateResults(){
	if(enemyPoints <= 0) {
		textResultCharacter.style.display = "block";
		document.getElementById("character-medal-img").style.display = "block";
		enemyImg.src= "images/end.png";
	 } else{
		textResultEnemy.style.display = "block";
		document.getElementById("enemy-medal-img").style.display = "block";
		characterMedalImg.src= "images/end.png";
	 } 
}

function displayButton(style){
	document.getElementById("attack-btn").style.display = style;
	document.getElementById("enemy-attack-btn").style.display = style;
}

function displayMedal(style){
	document.getElementById("enemy-medal-img").style.display = style;
	document.getElementById("character-medal-img").style.display = style;
}
