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






var listItems = document.querySelectorAll('li'); 
	// all <li> elements 

// add a class of cool to all list items 
var i; 
for ( i = 0; i < listItems.length; i++ ) {
	listItems[i].className = 'cool'; 
}

// add number of items in the list ot the heading
var heading 	= document.querySelector('h2'); 
	// h2 element
var headingText = heading.firstChild.nodeValue; 
	// h2 text 
var totalItems 	= listItems.length; 
	// no. of <li> elements 
var newHeading 	= headingText + '<span>' + totalItems + '</span>'; 
	// content
heading.innerHTML = newHeading; 	
	// update h2  





