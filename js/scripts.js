$(document).ready(function(){

	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	
	$.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + users[0], function(data){
		console.log(JSON.stringify(data, null, 2));
	});
	
});