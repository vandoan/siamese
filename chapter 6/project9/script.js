var sx = document.getElementById('sx'); 
	// element to hold screenx
var sy = document.getElementById('sy');
	// element to hold screeny 
var px = document.getElementById('px'); 
	// element to hold pagex
var py = document.getElementById('py');
	// element to hold pagey 
var cx = document.getElementById('cx'); 
	// element to hold clientX
var cy = document.getElementById('cy');
	// element to hold clientY 

function showPosition(event) {
	sx.value = event.screenX; 
		// update element with screen X
	sy.value = event.screenY; 
		// update element with screen Y
	px.value = event.pageX; 
	py.value = event.pageY;
	cx.value = event.clientX; 
	cy.value = event.clientY;
}

var el = document.getElementById('body'); 	
	// get body element
el.addEventListener('mousemove', showPosition, false); 
	// move updates position

