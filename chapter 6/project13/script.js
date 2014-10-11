var username, noteName, textEntered, target; 

noteName = document.getElementById('noteName'); 
	// elemnet that holds noteName

function writeLabel(e) { 
	if (!e) { 
		e = window.event; 
	}
	target = event.target || event.srcElement; 
	textEntered = e.target.value; 
	noteName.textContent = textEntered; 
}

// this is where the record / pause controls and functions go ...

if (document.addEventListener) { 
	document.addEventListener('click', function(e) {
		// for any click document 
		recorderControls(e); 
		// capture during bubble phase
	}, false); 
		// if input event fires on username input call writeLabel()
		// capture during bubble phase
	username.addEventListener('input', writeLabel, false); 
} else { 
	document.attachEvent('onclick', function(e){
		recorderControls(e); 
	}); 
	// if keyup event fires on username input call writeLabel()
	username.attachEvent('onkeyup', writeLabel, false); 
}

function recorderControls(e) {
	if (!e) {
		e = window.event; 
	} 
	target = event.target || event.srcElement; 
	if (event.preventDefault) {
		e.preventDefault(); 
	} else { 
		event.returnValue = false; 
	}

	switch(target.getAttribute('data-state')) {
		case 'record': 
			record(target); 
			break; 
			case 'stop': 
			stop(target); 
			break; 
			// more buttons could go here
		}
	}; 

	function record(target) { 
		target.setAttribute('data-state', 'stop'); 
		target.textContent = 'stop': 
	}

	function stop(target) { 
		target.setAttribute('data-state', 'record'); 
		target.textContent = 'record'; 
	}
