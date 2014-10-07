/* The script is placed inside an immediately invoked function 
expression which helps protect the scope of variables */

(function() {

	// PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS 

	//  Create a hotel object using object literal syntax
	var hotel = { 
		name: 'Park', 
		roomRate: 240, // 	Amount in dollars 
		discount: 15, // 	Percentage discount 
		offerPrice: function() { 
			var offerRate = this.roomRate * (( 100 - this.discount) / 100 ) ; 
			return offerRate; 
		}
	}

	//	Write out the hotel name, standard rate, and the special rate
	var hotelName, roomRate, specialRate; 	// declare variables

	hotelName 	= 		document.getElementById('hotelName') ; 	// Get elements
	roomRate 	= 		document.getElementById('roomRate') ; 
	specialRate = 		document.getElementById('specialRate') ; 

	hotelName.textContent = 	hotel.name; 					// Write hotel name
	roomRate.textContent = 		'$' + hotel.roomRate ; // Write room rate
	specialRate.textContent = 	'$' + hotel.offerPrice() ; 	// Write offer price

	// PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
	var expiryMsg; 	// message displayed to users
	var today; 		// today's date
	var elEnds; 	// the element that shows the message about the the offer ending

	function offerExpires(today) { 
		// 	declare varibles within the function for local scope 
		var weekFromToday, day, date, month, year, dayNames, monthNames ; 
		// add 7 days time (addedd in milliseconds)
		weekFromToday = 	new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000) ; 
		// create arrays  to hold the names of days / months 
		dayNames 	= 			['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] ;
		monthNames 	= 		['January', 'Februaray', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 
								'November', 'December'] ; 
		// collect the parts of the date to show on the page
		day 	= 		dayNames[weekFromToday.getDay()]; 
		date 	= 		weekFromToday.getDate(); 
		month 	= 		monthNames[weekFromToday.getMonth()]; 
		year 	= 		weekFromToday.getFullYear(); 
		// create the message 
		expiryMsg = 		'Offer expires next '; 
		expiryMsg += 		day +' <br /> (' + date + ' ' + month + ' ' + year + ')' ;
		return expiryMsg; 
	}

	today = 	new Date(); 						// put today's date in variable
	elEnds = 	document.getElementById('offerEnds'); 	// get the offerEnds element 
	elEnds.innerHTML =	offerExpires(today); 		// add the expiry message

	// finish the immediately invoked funciton expression
}()); 



