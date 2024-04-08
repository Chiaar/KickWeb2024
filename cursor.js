 // Update the position of the custom cursor based on mouse movement
 document.addEventListener('mousemove', function(event) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.left = event.clientX + 'px';
    cursor.style.top = event.clientY + 'px';
});