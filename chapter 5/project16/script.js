var list = document.getElementsByTagName('ul')[0];

// add new item to end of list 
var newItemLast = document.createElement('li'); 
	// create element
var newTextLast = document.createTextNode('cream'); 
	// create text node 
newItemLast.appendChild(newTextLast); 
	// add text node to elemnet 
list.appendChild(newItemLast); 
	// add element end of list 

// add new item start of list
var newItemFirst = document.createElement('li'); 
	// create element
var newTextFirst = document.createTextNode('kale');
	// create text node
newItemFirst.appendChild(newTextFirst); 
	// add text node to element
list.insertBefore(newItemFirst, list.firstChild); 
	// add element to list 

