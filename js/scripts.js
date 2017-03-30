var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var onlineCounter = 0;
var offlineCounter = 0;
var allCounter = 0;

//Online Button
function loadOnlineXMLDoc() {
	if (onlineCounter === 0){
		document.getElementById('images-id').innerHTML = '';
		// document.getElementById('all-id').style.display = 'none';
		// document.getElementById('images-id').style.display = 'block';
		onlineCounter ++;
	  for (var i = 0; i < users.length ; i++) { 
	    var xmlhttp = new XMLHttpRequest();
	    var url = "https://wind-bow.glitch.me/twitch-api/streams/" + users[i];
	    
	      (function(xmlhttp){
	        xmlhttp.onreadystatechange = function() {
		        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
		          if (xmlhttp.status == 200) {
		          	var data = xmlhttp.responseText;
								var jsonResponse  = JSON.parse(data);
		          	if(jsonResponse['stream']!= null){
			            document.getElementById('images-id').innerHTML += ( "<div class='col-xs-6 col-md-3'>" + 
																																		    "<a href='" + jsonResponse['stream']['channel']['url'] + "' target='_blank' class='thumbnail'>" +
																																		      "<img src='" + jsonResponse['stream']['channel']['logo']  +"'/>" +
																																		      jsonResponse['stream']['channel']['display_name'] + 
																																		    "</a>" +
																																		  "</div>" );
		          	} 
		          }else if (xmlhttp.status == 400) {
		            console.log('There was an error 400');
		          }else {  
		            console.log('Something else other than 200 was returned.');
		          }
		        }
	      	}
	      })(xmlhttp)

	    xmlhttp.open("GET", url, true);
	    xmlhttp.send(); 
	  }
	  myElement = document.getElementById('images-id');
	}else{
		document.getElementById('images-id').remove();
		document.getElementById('row-id').append(myElement);
	}
}

var onlineButton = document.getElementById('online-button-id');
onlineButton.addEventListener('click', loadOnlineXMLDoc);

//Offline Button
// function loadOfflineXMLDoc() {
// 	if (offlineCounter === 0){
// 		document.getElementById('images-id').style.display = 'none';
// 		document.getElementById('all-id').style.display = 'none';
// 		document.getElementById('offline-id').style.display = 'block';
// 		offlineCounter ++;
// 		for (var i = 0; i < users.length ; i++) { 
// 	    var xmlhttp = new XMLHttpRequest();
// 	    var url = "https://wind-bow.glitch.me/twitch-api/streams/" + users[i];
	    
// 	      (function(xmlhttp){
// 	        xmlhttp.onreadystatechange = function() {
// 		        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
// 		          if (xmlhttp.status == 200) {
// 		          	var data = xmlhttp.responseText;
// 								var jsonResponse  = JSON.parse(data);
// 								if (jsonResponse['stream'] === null){
// 									var title = jsonResponse['_links']['channel'].replace('https://api.twitch.tv/kraken/channels/', '');
// 									document.getElementById('images-id').innerHTML += ( "<div class='col-xs-6 col-md-3'>" + 
// 																																		    "<a href='https://www.twitch.tv/" +  title + "' target='_blank' class='thumbnail'>" +
// 																																		      "<img src='" + jsonResponse['logo']  +"'/>" +
// 																																		      title + 
// 																																		    "</a>" +
// 																																		  "</div>" );
// 								}
// 		          }else if (xmlhttp.status == 400) {
// 		            console.log('There was an error 400');
// 		          }else {  
// 		            console.log('Something else other than 200 was returned.');
// 		          }
// 		        }
// 	      	}
// 	      })(xmlhttp)

// 	    xmlhttp.open("GET", url, true);
// 	    xmlhttp.send(); 
// 	  }
// 	} else {
// 		document.getElementById('images-id').style.display = 'none';
// 		document.getElementById('all-id').style.display = 'none';
// 		document.getElementById('offline-id').style.display = 'block';
// 	}
// }
// var offlineButton = document.getElementById('offline-button-id');
// offlineButton.addEventListener('click', loadOfflineXMLDoc);

//All Button 
function loadAllXMLDoc() {
	if (allCounter === 0){
		document.getElementById('images-id').style.display = 'none';
		document.getElementById('offline-id').style.display = 'none';
		document.getElementById('all-id').style.display = 'block';
		allCounter ++;
		for (var i = 0; i < users.length ; i++) { 
	    var xmlhttp = new XMLHttpRequest();
	    var url = "https://wind-bow.glitch.me/twitch-api/streams/" + users[i];
	      (function(xmlhttp){
	        xmlhttp.onreadystatechange = function() {
		        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
		          if (xmlhttp.status == 200) {
		          	var data = xmlhttp.responseText;
								var jsonResponse  = JSON.parse(data);
								if (jsonResponse['stream'] === null){
									var title = jsonResponse['_links']['channel'].replace('https://api.twitch.tv/kraken/channels/', '');
									document.getElementById('all-id').innerHTML += ("<a href='https://www.twitch.tv/" + title + "' target='_blank'>" + title + "</a>" + "<br/><br/>");
								} else if (jsonResponse['stream'] != null){
									document.getElementById('all-id').innerHTML += ("<a href='" + jsonResponse['stream']['channel']['url'] + "' target='_blank'>" + jsonResponse['stream']['channel']['display_name'] + "</a>" + "<br/><br/>");
								}
		          }else if (xmlhttp.status == 400) {
		            console.log('There was an error 400');
		          }else {  
		            console.log('Something else other than 200 was returned.');
		          }
		        }
	      	}
	      })(xmlhttp)

	    xmlhttp.open("GET", url, true);
	    xmlhttp.send(); 
	  }
	} else {
		document.getElementById('images-id').style.display = 'none';
		document.getElementById('offline-id').style.display = 'none';
		document.getElementById('all-id').style.display = 'block';
	}
}

var allButton = document.getElementById('all-button-id');
allButton.addEventListener('click', loadAllXMLDoc);
