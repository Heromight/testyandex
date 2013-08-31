////////////////////////////////////////// Определение массивов и переменных ////////////////////////////////////////////

var allcards = new Array();
var player1 = new Array(25);
var player2 = new Array(25);
var packs = ["s", "c", "h", "d"];
document.getElementById("statementarea").innerHTML = "Игра начинается";
////////// Ввод карт по порядку с мастями и последующим перемешиваниям и распределением между двумя игроками ////////////

var j = 0;
var k = 0;
for ( var i = 0; i < 52; i++ ) {
		if ( j < 13 ) {
			allcards[i] = j + packs[k];
			j++;		
		}
		else {
			j = 0;
			k++;
			allcards[i] = j + packs[k];
			j++;
		}
}
allcards.sort(function() { return Math.random() - Math.random() } );
for (var i = 0; i < 52; i++) {
	if ( i < 26) player1[i] = allcards[i];
	else player2[i-26] = allcards[i];
}

////////////////////////////////////// Начало игры (главный алгоритм) ///////////////////////////////////////////////////

var temp = new Array();				// Переменная для временных карт, которые накапливаются при проверке схожестей карт игроков
var p1, p2, s1, s2;					// Текущие карты, которые будут проверяться между собой
var card1 = document.getElementById("card1").style;
var card2 = document.getElementById("card2").style;
function startTheGame() {
	var timer = setTimeout(algorithm, 100);
	clearTimeOut(timer);
	}
function algorithm() {
	while ((player1.length > 0) && (player2.length > 0)) {	 // Цикл, в котором пров-ся основное условие алгоритма - когда опустеет рука одного из игроков
		p1 = player1.shift();
		s1 = p1 + ".png";
		card1.backgroundImage = "url(./" + s1 + ")";
		card1.backgroundRepeat = "no-repeat";
		p2 = player2.shift();
		s2 = p2 + ".png";
		card2.backgroundImage = "url(./" + s2 + ")";
		card2.backgroundRepeat = "no-repeat";
		if ( parseInt(p1) > parseInt(p2) ) {
				temp.push(p1);
				temp.push(p2);
				document.getElementById("statementarea").innerHTML = "Игрок 1 выйграл карты";
				player1new = player1.concat(temp);
				player1 = player1new;
				player1new = [];
				temp = [];
			}
			else if ( parseInt(p1) < parseInt(p2) ) {
					temp.push(p1);
					temp.push(p2);
					document.getElementById("statementarea").innerHTML = "Игрок 2 выйграл карты";
					player2new = player2.concat(temp);
					player2 = player2new;
					player2new = [];
					temp = [];
				}
				else {
					temp.push(p1);
					temp.push(p2);
					document.getElementById("statementarea").innerHTML = "Спор";
					continue;
				}
			break;
		}
	if (player1.length <= 0) {
		alert("Выйграл Игрок1");
	}
	else if (player2.length <= 0) {
		alert ("Выйграл Игрок2");
	}
}