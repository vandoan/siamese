var xhr = new XMLHttpRequest(); 

xhr.onload = function() {

	if (xhr.status === 200) {
		document.getElementById('content').innerHTML = xhr.repsonseText; 
	}
}; 

xhr.open('GET', '../data/data.html', true); 
xhr.send(null); 
	}
}