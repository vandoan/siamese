function showEvents(data) {
	var newContent = ''; 

	for (var i = 0; i < data.events.length; i++) {
		newContent += '<div class="event">'; 
		newContent += '<img src="' + data.events[i].map + '"'; 
		newContent += ' alt="' + data.events[i].location + data.events[i].location + '" />'; 
		newContent += '<p><b>' + data.events[i].location + '</b><br>'; 
		newContent += data.events[i].data + '</p>'; 
		newContent += '</div>'; 
	}
		
document.getElementById('content').innerHTML = newContent; }

	showEvents({
		"events": [ 
		{
			"location": "San Francisco, CA", 
			"data": "May 1", 
			"map": "img/map-ca.png"
		},
		{
			"location": "Austin, TX", 
			"date": "May 15", 
			"map": "img/map-tx.png"
		}, 
		{	
			"location": "New York, NY", 
			"data": "May 30", 
			"map": "img/map-ny.png"
		}
	]
});
