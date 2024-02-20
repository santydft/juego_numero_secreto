

let numeroSecreto = 0;
let intentos = 0;
let listaDeNumeros = [];
let maximoIntentos = 10;

console.log (numeroSecreto);


function elementoTexto(elemento, texto){

   let titulo = document.querySelector(elemento);
   titulo.innerHTML = texto;
   return; 
}



function valoresIniciales(){
   elementoTexto('h1', 'juego del numero secreto');
   elementoTexto('p', `seleccione un numero del 1 al ${maximoIntentos}`);
   numeroSecreto = numeroRandom();
   intentos = 1;
}

function reiniciarJuego(){
   //limpiamos la caja
   limpiarCaja();
   //restablecer textos
   //generar el numero aleatorio
   // reiniciar el numero de intentos
   valoresIniciales();
   //reiniciar el boton de 'intente nuevamente'
   document.getElementById('reiniciar').setAttribute('disabled', 'true');

}

function limpiarCaja (){

   document.getElementById('intentoUsuario').value = '';
}

function numeroRandom(){
   let numeroGenerado = Math.floor(Math.random()*maximoIntentos)+1;
console.log(numeroGenerado);
console.log(listaDeNumeros);
   if(listaDeNumeros.length == maximoIntentos){
   
      elementoTexto('p', 'llegamos al maximo de numeros');

   }else{

   if(listaDeNumeros.includes(numeroGenerado)){
   return numeroRandom();
   } else {
      listaDeNumeros.push(numeroGenerado);
      return numeroGenerado;
   }

   }
}

function intentoDeUsuario(){
   let numeroUsuario = parseInt(document.getElementById('intentoUsuario').value);
   

   if(numeroUsuario === numeroSecreto){
      elementoTexto('p', `felicidades has acertado en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
   }   else{
      if(numeroUsuario > numeroSecreto){
         elementoTexto('p', 'el numero es menor');
      } else {
         elementoTexto('p', 'el numero es mayor');
      }
   }
   intentos++;
   limpiarCaja();
   return;
}

valoresIniciales();