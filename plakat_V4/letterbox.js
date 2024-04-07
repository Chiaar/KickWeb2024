/*function letterbox() {
    // Get all SVG elements with class "letter"
    var svgs = document.querySelectorAll('.letter');
    
    // Iterate over each SVG
    svgs.forEach(function(svg) {
        // Get the bounding box of the SVG content
        var bbox = svg.getBBox();
        
        // Update the viewBox attribute of the SVG
        svg.setAttribute("viewBox", bbox.x + " " + bbox.y + " " + bbox.width + " " + bbox.height);
    });
}

// Call the letterbox function when the page is loaded
window.onload = function() {
    letterbox();
};*/