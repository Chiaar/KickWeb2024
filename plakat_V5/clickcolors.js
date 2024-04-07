// Funktion zum Ändern der Farbe eines SVG-Elements
function changeColor(elementId) {
    var element = document.getElementById(elementId); // Das SVG-Element mit der entsprechenden ID wird ausgewählt
    if (element) {
        var circle = element.querySelector('circle');
        var currentColor = circle.getAttribute('fill'); // Aktuelle Farbe des Kreises abrufen
        // Wenn die aktuelle Farbe schwarz ist, ändere sie in Rot, sonst ändere sie in Schwarz
        var newColor = (currentColor === 'black') ? '#ff0000' : 'black';
        circle.setAttribute('fill', newColor); // Die Farbe des Kreises im SVG ändern
    }
}

// Klickereignisse für das SVG hinzufügen
document.getElementById('gcircle').addEventListener('click', function() {
    changeColor('gcircle'); // Ändert die Farbe des Kreises im gcircle-SVG
});
