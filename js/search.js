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
