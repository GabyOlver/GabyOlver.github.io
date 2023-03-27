import cipher from './cipher.js';

const hello = document.getElementById("root");
const startButton = document.getElementById("Iniciar");
const cipherCaesar = document.getElementById("cipherCaesar");
const returnButton = document.getElementById("regresar");

document.addEventListener('click', function(e) {//Escuchador de eventos para que al dar clic en cualquier lugar de la pagina se ejecute el codigo
  // eslint-disable-next-line no-var
  var heart = document.createElement('div');
  heart.classList.add('heart');// Se crea un elemento div y se le da la variable heart, de pues se le da una clase en css para poder aplicarle estilos
  heart.style.top = e.clientY + 'px';//posicion vertical del cursor en relacion a la ventana del navegador
  heart.style.left = e.clientX + 'px';// posicion horizontal para colocar el corazon en el lugar correcto dentro de la pagina
  document.getElementById('hearts-container').appendChild(heart);// se hace un elemento hijo
  setTimeout(function() {
    heart.remove();
  }, 1000);//Temporizador que elimina los corazones despues de 1 segundo
});

cipherCaesar.style.display = "none";

startButton.addEventListener("click", function() {
  startButton.style.display = "none";
  hello.style.display = "none";
  cipherCaesar.style.display = "block";
})

const cipherButton = document.getElementById("cifrar"); //Toma mi boton del HTML
cipherButton.addEventListener("click", function () { //Escuchador de eventos para cuando el usuario haga click en cifrar
  const string = document.getElementById("texto").value.toUpperCase(); // Tomar el valor del input de texto ingresado por el usuario y convertirlo a mayuscula
  const offset = document.getElementById("posiciones").value; // Toma el valor de las posiciones a cifrar ingresadas por el usuario
  const message = document.getElementById("resultado");// Muestra el resultado cifrado

  message.innerHTML = cipher.encode(offset, string);
})
//   cipher.encode(numberInput, inputCipher); // Llama a mi funcion encode desde cipher.js


const decipherButton = document.getElementById("descifrar");
decipherButton.addEventListener("click", function() {
  const decipherText = document.getElementById("texto").value.toUpperCase();
  const offset = document.getElementById("posiciones").value; // Toma el valor de las posiciones a cifrar ingresadas por el usuario
  const message = document.getElementById("resultado");// Muestra el resultado cifrado

  message.innerHTML = cipher.decode(offset, decipherText);
})

returnButton.addEventListener("click", function() {
  const decipherText = document.getElementById("texto");
  const message = document.getElementById("resultado");
  const offset = document.getElementById("posiciones");
  startButton.style.display = "block";
  hello.style.display = "block";
  cipherCaesar.style.display = "none";
  decipherText.value="";
  message.innerHTML = "";
  offset.value= "";
})

// console.log(cipher);
