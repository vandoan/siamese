var hotItems = document.querySelectorAll('li.hot') ; // store nodelist in array 

if (hotItems.length > 0) { 	// if it contains items 

	for (var i = 0 ; i < hotItems.length ; i++ ) { 	// loop through each item
		hotItems[i].className = 'cool' ; 			// change value of class attribute
	}
}