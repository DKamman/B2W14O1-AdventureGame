var game 			= document.getElementById("game-container");
var titel 			= document.getElementById("title");
var beschrijving 	= document.getElementById("description");
var inventory		= document.getElementById("inventoryItem");
var knoppen 		= document.getElementById("game-buttons");
var knop1 			= document.getElementById("button1");
var knop2 			= document.getElementById("button2");
var knop3 			= document.getElementById("button3");

var ItemsInventory = [];

//Toevoegen van een externe CSS voor een google font.
var link = document.createElement("LINK");
	document.head.appendChild(link);
var att 	= document.createAttribute("href");
var att2 	= document.createAttribute("rel")
	att.value = "https://fonts.googleapis.com/css?family=Unlock"; 
	att2.value = "stylesheet";
	link.setAttributeNode(att);
	link.setAttributeNode(att2);

function deathReload(){
		forceGet = true;
		location.reload(forceGet)
	}

function start(){
	document.body.style.backgroundImage = "url('img/startpage.jpg')";

	//Verwijderd de overbodige knoppen en het InventoryItem.
	knop2.style.display = "none";
	knop3.style.display = "none";
	inventory.style.display = "none";
	
	//Basis van een level. Titel, Beschrijving en Knop beschrijving.
	titel.innerHTML = "Temple Adventure";
	beschrijving.innerHTML = "In dit spel ga je op onderzoek binnen in een oude Tempel. Maak de goede keuzes om een schat te vinden en het spel te winnen. Kijk uit voor de gevaren die op de loer liggen!\n(Bij elk level krijg je drie keuzes die je kunnen leiden naar je dood of naar het volgende level.)"
	knop1.innerHTML = "Start!";

	knop1.addEventListener("click", level1, {once: true});

}



function level1(){

	function B11(){
		inventory.style.display = "";
		inventory.setAttribute("src","img/fakkel.png");
		ItemsInventory.push("fakkel");
		}
	function B13(){
		window.alert("Je hebt een geheime doorgang gevonden die je diep de tempel in leidt.\n(ga door naar level 5)");
		level5();
	}

	document.body.style.backgroundImage = "url('img/1.jpg')";
	knop2.style.display = "";
	knop3.style.display = "";

	titel.innerHTML = "Level 1 - Ingang";
	beschrijving.innerHTML = "Je gaat de tempel in en ziet een dorgang recht voor je, een fakkel die aan de muur hangt en een steen met een inscriptie erop."
	knop1.innerHTML = "Pak de fakkel";
	knop2.innerHTML = "Loop rechtdoor";
	knop3.innerHTML = "Lees de steen met de tekst: 'Uw voorgangers zijn gestorven'";

	knop1.onclick = B11;
	knop2.onclick = level2;
	knop3.onclick = B13;

}



function level2(){

	function B22(){
		var img1 = document.createElement("IMG");
		game.appendChild(img1);
		var att 	= document.createAttribute("src");
		var att2 	= document.createAttribute("alt");
		var att3	= document.createAttribute("id");
		att.value = "img/mes.png"; 
		att2.value = "een mes";
		att3.value = "inventoryItem2"
		img1.setAttributeNode(att);
		img1.setAttributeNode(att2);
		img1.setAttributeNode(att3);
		ItemsInventory.push("mes");
		}
	function B23(){
		window.alert("In het hand van het skelet vind je een sleutel die past op het slot. Je loopt door naar de volgende kamer.");
		level4();
	}

	window.alert("De doorgang leidt naar een kamer waar een platform in staat");

	document.body.style.backgroundImage = "url('img/2.jpg')";
	titel.innerHTML = "Level 2 - Het goede item";
	beschrijving.innerHTML = "Op het platform ligt een mes. Verder in de kamer zie je een menselijk skelet liggen en een hendel aan de muur hangen en een deur met een slot erop."
	knop1.innerHTML = "Trek aan de hendel";
	knop2.innerHTML = "Pak het mes van het platform";
	knop3.innerHTML = "Inspecteer het skelet";

	knop1.onclick = level3;
	knop2.onclick = B22;
	knop3.onclick = B23;

}


function level3(){

	function B31(){
		alert("Je krijgt de deur met geen mogelijkheid open.")
	}
	function B32(){
		alert("Je steekt jezelf meerdere keren waarna je een pijnlijk maar zekere dood sterft")
		deathReload();
	}
	function B33(){
		alert("Je zit dagen zonder voedsel, water , met een rommelige buik tot dat je langzaam in slaap valt.")
		deathReload();
	}

	document.body.style.backgroundImage = "url('img/3.jpg')";
	titel.innerHTML = "Level 3 - Geen weg terug";
	beschrijving.innerHTML = "De deur is achter je dicht gegaan en je krijgt hem niet meer open. Je kijkt om je heen en ziet allemaal skeleten liggen."
	knop1.innerHTML = "Probeer de deur te openen";
	knop2.innerHTML = "Gebruik het mes op jezelf";
	knop3.innerHTML = "Wacht tot je sterft van de honger";

	knop1.onclick = B31;
	knop2.onclick = B32;
	knop3.onclick = B33;	
}


function level4(){

	knop3.style.display = "none";
	knop2.disabled = true;

	function B41() {
		/*if  (ItemsInventory ["fakkel"] = true) {
			knop2.disabled = false;	
		}
		else{
			alert("Je loopt eindeloos rond in de duistere kamer")
			deathReload();
		}*/
		if (ItemsInventory.includes("fakkel")) {
			knop2.disabled = false;
		}
		else{
			alert("Je loopt eindeloos rond in de duistere kamer")
			deathReload();
		}
	}
	document.body.style.backgroundImage = "url('img/4.jpg')";
	titel.innerHTML = "Level 4 - Duisternis";
	beschrijving.innerHTML = "Je ziet niks."
	knop1.innerHTML = "Plaats de fakkel";
	knop2.innerHTML = "Ga door de poort";
	knop3.innerHTML = "";	

	knop1.onclick = B41;
	knop2.onclick = level5;
}


function level5(){

	knop3.style.display = "";

	function B51(){
		alert("De mummy grijpt je!");
		deathReload();
	}

	function B52(){
		if (ItemsInventory.includes("mes")) {
			alert("De mummy valt uit 1 en je loopt door de deur naar de volgende kamer.")
			level6();
		}
		else{
			alert("Je hebt geen mes. De mummy draait je nek om.");
			deathReload();
		}
	}

	document.body.style.backgroundImage = "url('img/5.jpg')";
	titel.innerHTML = "Level 5 - De knekelige vijand";
	beschrijving.innerHTML = "Je loopt de kamer in en ziet een mummy met een zwaard op je aflopen. De mummy blokkeert de deur."
	knop1.innerHTML = "Probeer weg te rennen";
	knop2.innerHTML = "Steek de mummy met je mes";
	knop3.innerHTML = "Knuffel de mummy";

	knop1.onclick = B51;
	knop2.onclick = B52;
	knop3.onclick = B51;	
}


function level6(){
	function B61(){
		alert("Je bent dood!");
		deathReload();
	}
	function B63(){
		alert("Je bent dood!");
		deathReload();
	}
	document.body.style.backgroundImage = "url('img/6.jpg')";
	titel.innerHTML = "Level 6 - Moeilijke keus";
	beschrijving.innerHTML = ""
	knop1.innerHTML = "Loop door de linker doorgang";
	knop2.innerHTML = "Loop door de ingang recht voor je";
	knop3.innerHTML = "Loop door de rechter doorgang";

	knop1.onclick = B61;
	knop2.onclick = level7;
	knop3.onclick = B63;	
}


function level7(){
	function B71(){
		alert("1 van de planken breekt en je valt tot je dood.")
		deathReload();
	}
	function B73(){
		alert("Terwijl je met volle snelheid over de brug rent zie je de planken achter je de afgrond in vallen. Je redt het naar de overkant.")
		level8();
	}
	document.body.style.backgroundImage = "url('img/7.jpg')";
	titel.innerHTML = "Level 7 - De brug naar de volgende kamer";
	beschrijving.innerHTML = "Deze touw brug lijkt heel gammel. Kies goed hoe je erover heen gaat"
	knop1.innerHTML = "Kruipend";
	knop2.innerHTML = "Lopend";
	knop3.innerHTML = "Rennend";

	knop1.onclick = B71;
	knop2.onclick = B71;
	knop3.onclick = B73;	
}


function level8(){
	function B81(){
		alert("Je vindt een omweg achter een paar losse stenen.")
		level9();
	}
	function B82(){
		alert("Je bent de grootste idioot op de planeet. De spikes gaan door je heen als een warm mes door boter.");
		deathReload();
	}
	function B83(){
		alert("Je springt niet ver genoeg en je voet blijft hangen aan een spike. Je klapt op de stenen vloer.")
		deathReload();
	}

	document.body.style.backgroundImage = "url('img/8.jpg')";
	titel.innerHTML = "Level 8 - Bloederige spikes";
	beschrijving.innerHTML = "Je loopt een kamer binnen met een al geactiveerde booby trap. Je ziet bloederige spikes in de vloer."
	knop1.innerHTML = "Zoek een omweg";
	knop2.innerHTML = "Doorheen kruipen";
	knop3.innerHTML = "Eroverheen springen";

	knop1.onclick = B81;
	knop2.onclick = B82;
	knop3.onclick = B83;
}


function level9(){
	function B91(){
		alert("Je wordt geplet.");
		deathReload();
	}
	function B92(){
		alert("Onder je opent een valluik. Je valt een bekende kamer in.");
		level1();
	}
	function B93(){
		alert("je gaat op de grond liggen en de steen vliegt over je heen.\n Aan het uiteinde van de gang zie je de doorgang naar de volgende kamer.");
		level10();
	}

	document.body.style.backgroundImage = "url('img/9.jpg')";
	titel.innerHTML = "Level 9 - De rollende dood";
	beschrijving.innerHTML = ""
	knop1.innerHTML = "Probeer de steen te stoppen";
	knop2.innerHTML = "Druk op de knop";
	knop3.innerHTML = "Ga op de grond liggen";

	knop1.onclick = B91;
	knop2.onclick = B92;
	knop3.onclick = B93;
}


function level10(){

	function B101(){
		alert("De kamer stort in.");
		deathReload();
	}
	function B102(){
		alert("Je hebt de edelsteen, je bent rijk! Je wint!")
		deathReload();
	}
	function B103(){
		deathReload();
	}
	document.body.style.backgroundImage = "url('img/10.jpg')";
	titel.innerHTML = "Level 10 - End Game";
	beschrijving.innerHTML = "In dit spel ga je op onderzoek binnen in een oude Tempel. Maak de goede keuzes om een schat te vinden en het spel te winnen. Kijk uit voor de gevaren die op de loer liggen!"
	knop1.innerHTML = "Raak iets anders aan in de kamer";
	knop2.innerHTML = "Pak de edelsteen. Dit is het einde. Dit is geen truc. Pak de edelsteen en je bent rijk!";
	knop3.innerHTML = "Steek jezelf neer voor 1 of andere reden";

	knop1.onclick = B101;
	knop2.onclick = B102;
	knop3.onclick = B103;
}

start();