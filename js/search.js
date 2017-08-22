//Search 

function search (){
	showContent();
	var input = document.getElementById('search-field').value.toLowerCase();
	for (var k = 0; k < activeArray.length ;k++){
		if (!(activeArray[k].toLowerCase().match(input)) ){
			document.getElementById(activeArray[k]).style.display = 'none';
		}  
	}
}

function showContent(){
	for (var m = 0; m < activeArray.length; m++){
		document.getElementById(activeArray[m]).style.display = 'block';
	}
}

//Extend Purple Background

function purpleBackground(){
	if(activeArray.length <= 2 && activateOfflineButtonVar.className !== 'active'){
		document.getElementsByClassName('container')[0].style.height = '100vh';
	} else if (activeArray.length >= 3 || activateOfflineButtonVar.className === 'active') {
		document.getElementsByClassName('container')[0].style.height = '100%';
	}

	if(activeArray.length <= 4 && activateOfflineButtonVar.className !== 'active'){
		document.getElementsByClassName('dev-info')[0].style.top = '50px';
	} else if (activeArray.length > 4 || activateOfflineButtonVar.className === 'active') {
		document.getElementsByClassName('dev-info')[0].style.top = '0px';
	}
}
