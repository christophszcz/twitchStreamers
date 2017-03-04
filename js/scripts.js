$(document).ready(function(){

	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

	for (var i = 0; i < users.length ; i++) {
		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + users[i], function(data){
			//console.log(JSON.stringify(data, null, 2));

			$('.online-button').click(function(){
				if (data.stream !== null) {
					$('.online').show();
					var online =  data.stream.channel.display_name;
					// html += "<li>" +  data.stream.channel.display_name + "</li>";
					$('.online').append(online + " ");
				}
			});

			// if (data.stream === null ){
			// 	$('.offline').show();
			// 	var offlineResult = data._links.self.replace('https://api.twitch.tv/kraken/streams/', '');
			// 	// console.log(result);
			// 	$('.offline').append(offlineResult + " ");
			// 	//offline.push(result);
			// }
		});
	}
 
});