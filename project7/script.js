// select the starting point and find its children
var startItem 	= document.getElementsByTagName('ul')[0]; 
var firstItem 	= startItem.firstChild; 
var lastItem 	= startItem.lastChild; 

// change the values of the siblings' class attributes
firstItem.setAttribute('class', 'complete'); 
lastItem.setAttribute('class', 'cool')