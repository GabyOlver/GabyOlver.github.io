/* eslint-disable no-unreachable */

const cipher = {
  encode: function(offset, string){ // Funcion encode que contiene las posiciones a cifrar y el texto 
    let cipherPhrase = ""; // Variable que me dara el resultado de mi cifrado
    // eslint-disable-next-line eqeqeq
    if (string == "" || string == undefined || offset == "" || offset == undefined) { // Si el usuario deja en blanco el texto se arrojara un error
      throw new TypeError ("Ingresa caracteres validos"); // Error al dejar en blanco el input de texto
    }  
    for(let i=0; i<string.length; i++){ //Bucle que recorre todos los caracteres de string
      const asciiNum = string.charCodeAt(i);//charCodeAt para conocer el valor de cada caracter en codigo ASCII y se almacena en "string"
      if (asciiNum >=65 && asciiNum <=90){// Verificar que los caracteres sean letras Mayusculas dentro del codigo ASCII
        const formula = ((asciiNum - 65 + parseInt(offset)) %26 + 65);//Se calcula el valor del caracter en ASCII se cifrar= y se guarda en formula
        cipherPhrase += String.fromCharCode(formula);
        // eslint-disable-next-line no-console
        console.log(asciiNum);// Imprime asciiNum
      } else if (asciiNum === 32) { // Si es un espacio en blanco, lo agregamos sin cifrar
        cipherPhrase += " ";//Respeta espacios en blanco
      }else {//si no
        cipherPhrase += string.charAt(i);//Respeta caracteres especiales sin cifrar
      }
    }
    return cipherPhrase; // Orden para devolver el texto cifrado
  },

  decode: function(offset, decipherText){ //Define funcion "decode" con dos argumentos, offset es el desplazamiento que se va a usar y "decipherText" es la frase o palabra a descifrar
    let decipherPhrase = ""; // Variable que va a almacenar el texto cifrado
    // eslint-disable-next-line eqeqeq
    if (decipherText == "" || decipherPhrase == undefined || offset == "" || offset == undefined) {
      throw new TypeError ("Ingresa caracteres validos"); // Se comprueba si la cadena esta vacia y si es asi se arroja un error
    }
    for(let i=0; i<decipherText.length; i++){ // bucle que recorre todos los caracteres de decipherText
      const asciiDec = decipherText.charCodeAt(i); // Se usa charCodeAt para conocer el valos del caracter en ASCII y se almacena en "asciiDec"
      if(asciiDec >=65 && asciiDec <=90){ //Se verifica que los valores esten dentro de mayusculas en el codigo ASCII
        const otraFormula = ((asciiDec - 90 - parseInt(offset)) %26 + 90); // Aqui se calcula el valor ASCII descifrado y se guarda en "otraFormula" y despues se agrega a "decipherPhrase"
        decipherPhrase += String.fromCharCode(otraFormula);
      }else if (asciiDec === 32) { // Si es un espacio en blanco, lo agregamos sin descifrar
        decipherPhrase += " ";
      }else {
        decipherPhrase += decipherText.charAt(i);//Si no es letra, ni un espacio, tambien se agrega sin descifrar
      }
    }
    return decipherPhrase;//Finalmente damos la orden de devolver el texto descifrado en "decipherPhrase"
  }

};

export default cipher;
