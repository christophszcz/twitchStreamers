function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2";

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
      if (xmlhttp.status == 200) {
        document.getElementById("online-id").innerHTML = xmlhttp.responseText;
      }else if (xmlhttp.status == 400) {
        console.log('There was an error 400');
      }else {
        console.log('Something else other than 200 was returned.');
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

var onlineButton = document.getElementById('online-button-id');
onlineButton.addEventListener('click', loadXMLDoc, false);

// $(document).ready(function(){

// 	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
// 	var array = [];

// 	for (var i = 0; i < users.length ; i++) {
// 		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + users[i], function(data){
			//console.log(JSON.stringify(data, null, 2));


			// $('.online-button').click(function(){
			// 	$('.offline').hide();
			// 	if (data.stream !== null) {
			// 		$('.online').show();
			// 		var online =  data.stream.channel.display_name;
			// 		// html += "<li>" +  data.stream.channel.display_name + "</li>";
			// 		$('.online').append(online + " ");
			// 	}
			// });

			// $('.offline-button').click(function(){
			// 	$('.online').hide();
			// 	if (data.stream === null ){
			// 		$('.offline').show();
			// 		var offlineResult = data._links.self.replace('https://api.twitch.tv/kraken/streams/', '');
			// 		// console.log(result);
			// 		$('.offline').append(offlineResult + " ");
			// 		//offline.push(result);
			// 	}
			// });

			// $('.all-button').click(function(){
			// 	if( $('.online').css('display') === 'none' ){
			// 		$('.online').show();
			// 	} else if ($('.offline').css('display') === 'none'){
			// 		$('.offline').show();
			// 	}
			// });