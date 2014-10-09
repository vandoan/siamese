 // even code from the book is not working


function checkLength(e, minLength) {         // Declare function
  if (!e) {                                  // If event object doesn't exist
    e = window.event;                        // Use IE fallback
 }
 return e.target || e.srcElement; 
}

function itemDone(e) {
  var target, elParent, elGrandparent; 
  target = getTarget(e); 
  elParent = target.parentNode; 
  elGrandparent = target.parentNode.parentNode; 
  elGrandparent.removeChild(elParent);

  // prevent the link from taking you elsewhere
  if (e.preventDefault) { 
    e.preventDefault(); 
  } else {
    e.returnValue = false; 
  } 
}

// set up event listeners to call itemDone() on click 
var el = document.getElementById('shoppingList'); 
if (el.addEventListener) {
  el.addEventListender('click', function(e_ {
    itemDone(e); 
  }, false); 
} else {
  el.attachEvent('onclick', function(e){
    itemDone(e); 
  }); 
}
