var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var onlineCounter = 0;
var offlineCounter = 0;

function loadOnlineXMLDoc() {
	if (onlineCounter === 0){
		document.getElementById('offline-id').style.display = 'none';
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
								document.getElementById('title').innerHTML = "<h3>Online</h3>"
		            document.getElementById('online-id').innerHTML += (jsonResponse['stream']['channel']['display_name'] + "<br/><br/>");
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
	}else{
		document.getElementById('offline-id').style.display = 'none';
		document.getElementById('title').innerHTML = "<h3>Online</h3>";
		document.getElementById('online-id').style.display = 'block';
	}
}

var onlineButton = document.getElementById('online-button-id');
onlineButton.addEventListener('click', loadOnlineXMLDoc);

function loadOfflineXMLDoc() {
	if (offlineCounter === 0){
		document.getElementById('online-id').style.display = 'none';
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
								document.getElementById('title').innerHTML = "<h3>Offline</h3>";
								if (jsonResponse['stream'] === null){
									var title = jsonResponse['_links']['channel'].replace('https://api.twitch.tv/kraken/channels/', '');
									document.getElementById('offline-id').innerHTML += (title + "<br/><br/>");
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
		document.getElementById('title').innerHTML = "<h3>Offline</h3>";
		document.getElementById('offline-id').style.display = 'block';
	}
}
var offlineButton = document.getElementById('offline-button-id');
offlineButton.addEventListener('click', loadOfflineXMLDoc);
