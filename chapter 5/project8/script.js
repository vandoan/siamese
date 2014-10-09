var itemTwo = document.getElementById('two'); 
var elText = itemTwo.firstChild.nodeValue; 
	// get its text content
elText = elText.replace('pine nuts', 'kale'); 
itemTwo.firstChild.nodeValue = elText; 
	// update the list 