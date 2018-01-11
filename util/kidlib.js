var hentId = function(id) { return document.getElementById(id); }
var hentKlasse = function(id) { return document.getElementByClassName(id); }
var leggTilKnapp = function(id, func) { return document.getElementById(id).addEventListener("click", func); }
