// Funktion zum Ändern der Farbe eines SVG-Elements
function changeColor(elementId) {
    var element = document.getElementById(elementId); // Das SVG-Element mit der entsprechenden ID wird ausgewählt
    if (element) {
        var circle = element.querySelector('circle');
        var currentColor = circle.getAttribute('fill'); // Aktuelle Farbe des Kreises abrufen
        // Wenn die aktuelle Farbe schwarz ist, ändere sie in #ce5c16, sonst ändere sie in Schwarz
        var newColor = (currentColor === 'black') ? '#ce5c16' : 'black';
        circle.setAttribute('fill', newColor); // Die Farbe des Kreises im SVG ändern
    }
}

// Klickereignisse für das SVG hinzufügen
document.getElementById('gcircle').addEventListener('click', function() {
    changeColor('gcircle'); // Ändert die Farbe des Kreises im gcircle-SVG
});
document.getElementById('ucircle').addEventListener('click', function() {
    changeColor('ucircle'); // Ändert die Farbe des Kreises im gcircle-SVG
});
document.getElementById('tcircle').addEventListener('click', function() {
    changeColor('tcircle'); // Ändert die Farbe des Kreises im gcircle-SVG
});
document.getElementById('e2circle').addEventListener('click', function() {
    changeColor('e2circle'); // Ändert die Farbe des Kreises im gcircle-SVG
});
document.getElementById('fcircle').addEventListener('click', function() {
    changeColor('fcircle'); // Ändert die Farbe des Kreises im gcircle-SVG
});
document.getElementById('ocircle').addEventListener('click', function() {
    changeColor('ocircle'); // Ändert die Farbe des Kreises im gcircle-SVG
});
document.getElementById('rcircle').addEventListener('click', function() {
    changeColor('rcircle'); // Ändert die Farbe des Kreises im gcircle-SVG
});
document.getElementById('m2circle').addEventListener('click', function() {
    changeColor('m2circle'); // Ändert die Farbe des Kreises im gcircle-SVG
});

