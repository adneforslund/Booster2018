var innlegg = [];


function oppdaterInnlegg() {
    var innleggBoks = document.getElementById("innlegg-boks");
    var nyHTML = "";
    for(var i = 0; i < innlegg.length; i++) {
	var detteInnlegget = innlegg[i];
	nyHTML += "<div class=\"innlegg\">"
	nyHTML += "<div class=\"tittel\">Innlegg nummer " + i + "</div>";
	nyHTML += "<div class=\"tekst\">" + detteInnlegget.tekst + "</div>";
	nyHTML += "<div id=\"kommentar\"><div class=\"tidligere\">";
	for(var j = 0; j < detteInnlegget.kommentarer.length; j++) {
	    nyHTML += "<h3>" + detteInnlegget.kommentarer[i].navn + "</h3>";
	    nyHTML += "<p>" + detteInnlegget.kommentarer[i].kommentar + "</p>";
	}
    }
    nyHTML += "</div><p>Navn: <input type=\"text\" id=\"kommentar-navn\"></input></p><p>Kommentar: <input type=\"text\" id=\"kommentar-kommentar\"></input></p><p><button id=\"kommentar-send\">Legg til kommentar</button></p></div></div>";
    innleggBoks.innerHTML = nyHTML;
    if(innlegg.length > 0) {
	kommentarKnapper();
    }
}

document.getElementById("nytt-innlegg").addEventListener("click", function() {
    var nyttInnlegg = document.getElementById("nytt-innlegg-tekst").value;
    innlegg.push({
	"tekst": nyttInnlegg,
	"kommentarer": []
    });

    oppdaterInnlegg();
});

function kommentarKnapper() {
    document.getElementById("kommentar-send").addEventListener("click", function() {
	var navn = document.getElementById("kommentar-navn").value;
	var kommentar = document.getElementById("kommentar-kommentar").value;

	innlegg[innlegg.length - 1].kommentarer.push({
	    "navn": navn,
	    "kommentar": kommentar
	});
	
	oppdaterInnlegg();
    });
}
