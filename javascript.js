function mostrarEnlaces(){
	var numEnlaces = document.getElementById('num_enlaces'); 
	var enlaces = document.getElementsByTagName('a');

	numEnlaces.innerHTML =  enlaces.length;
	
	}

	mostrarEnlaces();


  
