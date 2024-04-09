// Farbänderung von Dots
function changeColor(elementId) {
    var element = document.getElementById(elementId); // Das SVG-Element mit der entsprechenden ID wird ausgewählt
    if (element) {
        var circle = element.querySelector('circle');
        var currentColor = circle.getAttribute('fill'); // Aktuelle Farbe des Kreises abrufen
        var newColor = (currentColor === 'black') ? '#ce5c16' : 'black';
        circle.setAttribute('fill', newColor); // Farbe der dots wird geändert
    }
}

// Klickereignisse für jeden einzelnen SVG Dot hinzugefügt
document.getElementById('gcircle').addEventListener('click', function () {
    changeColor('gcircle'); 
});
document.getElementById('ucircle').addEventListener('click', function () {
    changeColor('ucircle'); 
});
document.getElementById('tcircle').addEventListener('click', function () {
    changeColor('tcircle'); 
});
document.getElementById('e2circle').addEventListener('click', function () {
    changeColor('e2circle'); 
});
document.getElementById('fcircle').addEventListener('click', function () {
    changeColor('fcircle'); 
});
document.getElementById('ocircle').addEventListener('click', function () {
    changeColor('ocircle'); 
});
document.getElementById('rcircle').addEventListener('click', function () {
    changeColor('rcircle'); 
});
document.getElementById('m2circle').addEventListener('click', function () {
    changeColor('m2circle'); 
});


// Update the position of the custom cursor based on mouse movement
document.addEventListener('mousemove', function (event) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
});

