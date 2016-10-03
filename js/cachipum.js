//cachipum.js
//necesito una jugada y el valor de esa jugada va a ser piedra, papel o tijera

var jugadaUser;
var jugadaCompu;

var jugadaUser = prompt("¿Piedra, papel o tijera");
console.log(jugadaUser);

var numRandom = Math.random()*2;
var numRedondo = Math.round(numRandom);
console.log(numRedondo);

if(numRedondo==0){
	jugadaCompu=="piedra";
}else if(numRedondo==1){
	jugadaCompu=="tijera";
}else{
	jugadaCompu="papel";
}
alert("ahora le toca al computador elegir");
console.log(jugadaCompu);
alert("El compu eligió: " + jugadaCompu);

if(jugadaUser=="piedra"){
	if(jugadaCompu=="piedra"){
		alert("Empate");
	}else if(jugadaCompu=="tijera"){
		alert("Felicitaciones has ganado");
	}else{
		alert("Oh no!! La compu ha ganado");
	}
} else if(jugadaUser=="tijera"){
	if (jugadaCompu=="tijera"){
		alert("Es un empate");
	}else if(jugadaCompu=="papel"){
		alert("Felicitaciones has ganado");
	}else{
		alert("Ganó la compu");
	}
}else{
	if(jugadaCompu=="papel"){
		alert("Oh hubo un empate");
	}else if (jugadaCompu=="piedra"){
		alert("Felicitaciones gnaste");
	}else{
		alert("Oh no la compu ganó");
	}
}