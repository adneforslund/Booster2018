var hentId = function(id) { return document.getElementById(id); }
var hentKlasse = function(id) { return document.getElementByClassName(id); }
var leggTilKnapp = function(id, func) { return document.getElementById(id).addEventListener("click", func); }
var enterKnapp = function(id, func){ 
    
document.getElementById(id).addEventListener("keyup", function (event){
event.preventDefault();
if (event.keyCode === 13) 
    return document
        .getElementById("input")
        .click();
})}