var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var pictures = {
	'ESL_SC2': 'https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg',
	'freecodecamp': 'https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png',
	'habathcx': 'https://static-cdn.jtvnw.net/jtv_user_pictures/habathcx-profile_image-d75385dbe4f42a66-300x300.jpeg',
	'cretetion': 'https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-profile_image-12bae34d9765f222-300x300.jpeg',
	'OgamingSC2': 'https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg',
	'storbeck' : 'https://www.neafund.org/Content/images/neafund_photo_not_yet_available_300x300_01.jpg', 
	'RobotCaleb': 'https://static-cdn.jtvnw.net/jtv_user_pictures/robotcaleb-profile_image-9422645f2f0f093c-300x300.png',
	'noobs2ninjas' : 'https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_image-34707f847a73d934-300x300.png'
};

var onlineCounter = 0;
var offlineCounter  = 0;
var allCounter = 0;

//Online Button
function loadOnlineXMLDoc() {
	if (onlineCounter === 0){
		document.getElementById('offline-id').style.display = 'none';
		document.getElementById('all-id').style.display = 'none';
		document.getElementById('online-id').style.display = 'block';
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
			            document.getElementById('online-id').innerHTML += ( "<div class='col-xs-6 col-md-3'>" +
			            																											"<div class='thumbnail online-box'>" +
			            																												"<a href='" + jsonResponse['stream']['channel']['url'] + "' target='_blank' class='thumbnail'>" +
																																				  	"<img src='" + jsonResponse['stream']['channel']['logo']  +"'/>" + 	
																																				  	jsonResponse['stream']['channel']['display_name'] +
																																				  "</a>" +
																											        						"<p>" + jsonResponse['stream']['channel']['status'] + +  "</p>" +
																											        					"</div>" +
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
	} else {
		document.getElementById('offline-id').style.display = 'none';
		document.getElementById('all-id').style.display = 'none';
		document.getElementById('online-id').style.display = 'block';
	}
}

var onlineButton = document.getElementById('online-button-id');
onlineButton.addEventListener('click', loadOnlineXMLDoc);

//Offline Button
function loadOfflineXMLDoc() {
	if (offlineCounter === 0){
		document.getElementById('online-id').style.display = 'none';
		document.getElementById('all-id').style.display = 'none';
		document.getElementById('offline-id').style.display = 'block';
		offlineCounter ++;
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
									document.getElementById('offline-id').innerHTML += ("<div class='col-xs-6 col-md-3'>" + 
																																		    "<a href='https://www.twitch.tv/" +  title + "' target='_blank' class='thumbnail'>" +
																																		      "<img src='" +  pictures[title]  +"'/>" +
																																		      title + 
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
	  var myOfflineElement = document.getElementById('images-id');
	} else {
		document.getElementById('online-id').style.display = 'none';
		document.getElementById('all-id').style.display = 'none';
		document.getElementById('offline-id').style.display = 'block';
	}
}
var offlineButton = document.getElementById('offline-button-id');
offlineButton.addEventListener('click', loadOfflineXMLDoc);

//All Button 
function loadAllXMLDoc() {
	if (allCounter === 0){
		document.getElementById('online-id').style.display = 'none';
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
								var title = jsonResponse['_links']['channel'].replace('https://api.twitch.tv/kraken/channels/', '');
								if (jsonResponse['stream'] === null){
									document.getElementById('all-id').innerHTML +=  ("<div class='col-xs-6 col-md-3'>" + 
																																    "<a href='https://www.twitch.tv/" +  title + "' target='_blank' class='thumbnail'>" +
																																      "<img src='" +  pictures[title]  +"'/>" +
																																      title + 
																																    "</a>" +
																																  "</div>" );
								} else if (jsonResponse['stream'] != null){
									document.getElementById('all-id').innerHTML +=  ("<div class='col-xs-6 col-md-3'>" + 
																																    "<a href='" + jsonResponse['stream']['channel']['url'] + "' target='_blank' class='thumbnail'>" +
																																      "<img src='" +  pictures[title]  +"'/>" +
																																      jsonResponse['stream']['channel']['display_name']  + 
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
	} else {
		document.getElementById('online-id').style.display = 'none';
		document.getElementById('offline-id').style.display = 'none';
		document.getElementById('all-id').style.display = 'block';
	}
}

var allButton = document.getElementById('all-button-id');
allButton.addEventListener('click', loadAllXMLDoc);

//Activate Button 
var activateAllButtonVar = document.getElementById('all-button');
var activateOnlineButtonVar = document.getElementById('online-button');
var activateOfflineButtonVar = document.getElementById('offline-button');
activateAllButtonVar.addEventListener('click', activateAllButtonFn);
activateOnlineButtonVar.addEventListener('click', activateOnlineButtonFn);
activateOfflineButtonVar.addEventListener('click', activateOfflineButtonFn);

function activateAllButtonFn (){
	activateAllButtonVar.className += "active";
	activateOnlineButtonVar.classList.remove("active");
	activateOfflineButtonVar.classList.remove("active");
}

function activateOnlineButtonFn (){
	activateOnlineButtonVar.className += "active";
	activateAllButtonVar.classList.remove("active");
	activateOfflineButtonVar.classList.remove("active");
}

function activateOfflineButtonFn (){
	activateOfflineButtonVar.className += "active";
	activateAllButtonVar.classList.remove("active");
	activateOnlineButtonVar.classList.remove("active");
}
 