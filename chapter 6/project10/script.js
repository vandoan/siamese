// couldn't see the lowercase k 

var el; 

function charCount(e) { 
	var textEntered, charDisplay, counter, lastkey; 
	textEntered = document.getElementById('message').value; 
	charDisplay = document.getElementById('charactersLeft'); 
		// counter element 
	counter = (180 - (textEntered.length));
	charDisplay.textContent = counter; 

	lastkey = document.getElementById('lastKey'); 
		// get the last key 
	lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode; 
		// create msg
	}
	el = document.getElementById('message'); 
		// get msg element
	el.addEventListener('keypress', charCount, false); 
		// keypress event 
