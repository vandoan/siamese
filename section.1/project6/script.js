
// variables for the welcome message
var greeting = 'Hody '; 
var name ='Molly'; 
var message = ', please check your order:';
var welcome = greeting + name + message;  

// variables to hold details about the sign
var sign = 'Montaguge House'; 
var tiles = sign.length; 
var subTotal = tiles * 5; 
var shipping = 7; 
var grandTotal = subTotal + shipping; 

// get the element that has an id of greeting
var el = document.getElementById('greeting');
// replace the content of that element with the personalized message
el.textContent = welcome; 

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign; 

// get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles'); 
elTiles.textContent = tiles; 

//get the element taht has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal'); 
elSubTotal.textContent = '$' + subTotal;

// get the element that has an id of shipping then update its contents
var elSubTotal = document.getElementById('shipping'); 
elSubTotal.textContent = '$' + shipping;  

// get the element that has an id of grandTotal then update its contents 
var elGrandTotal = document.getElementById('grandTotal'); 
elGrandTotal.textContent = '$' + grandTotal; 