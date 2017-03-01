$(document).ready(function(){

	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var online = [];
	var offline = []

	for (var i = 0; i < users.length ; i++) {
		$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + users[i], function(data){
			//console.log(JSON.stringify(data, null, 2));

			// var html = "";

			if (data.stream === null ){
				// html += "<li>" +  data.stream + "</li>";
				// $('.test').html(html);
				$.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + users[i], function(json){
					offline.push(json.display_name);
				});
			} else if (data.stream !== null) {
				online.push(data.stream.channel.display_name);
				// html += "<li>" +  data.stream.channel.display_name + "</li>";
				// $('.test').html(html);
			}
		});
	}

	console.log(online);
	console.log(offline);

	// $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + users[0], function(data){
	// 		console.log(JSON.stringify(data, null, 2));
	// 		// if (data.stream !== null ){
	// 			var info = "<p>" +  data.stream.channel.display_name + "</p>";
	// 			$('.test').html(info);
	// 		// }

	// });
	 
	
});