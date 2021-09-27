
function clicked() {
	
	
	//console.log(event.target);

	if (event.target %2 != 0)
		event.target.textContent='x' ;
	else 
		event.target.textContent= "0" ;
}
let container=document.getElementById('container');
container.addEventListener("click",clicked);