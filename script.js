  
 /*FUNCIÓN ENCRIPTAR*/
function encriptar() {
  // Obtiene el valor del texto ingresado en el elemento HTML con la clase "text-area" y lo convierte a minúsculas
  const texto = document.querySelector(".text-area").value.toLowerCase();

  // Crea un objeto que contiene las letras y sus respectivos valores encriptados
  const valores = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

  // Reemplaza las letras "e", "i", "a", "o" y "u" en el texto utilizando una expresión regular
  // y la función de reemplazo proporcionada por el objeto "valores"
  const textoEncriptado = texto.replace(/[eiaou]/img, letra => valores[letra]);

  // Actualiza el contenido del elemento HTML con el id "mensaje" con el texto encriptado
  document.querySelector("#mensaje").innerHTML = textoEncriptado;

  // Borra el texto en el área de texto HTML con la clase "text-area"
  document.querySelector(".text-area").value = "";

  // Quita la imagen de fondo del elemento HTML con el id "mensaje"
  document.querySelector("#mensaje").style.backgroundImage = "none";



  //mensaje de sugerencia si se intenta encriptar con el campo vacío
  if (texto === "") {
    //el mensaje que muestra
    document.querySelector(".text-area").setAttribute("placeholder", "Debe ingresar un texto antes de encriptar");
    
    //Restaurar el placeholder original después de 1.5 segundos
    setTimeout(function() {
      document.querySelector(".text-area").setAttribute("placeholder", "Ingrese su texto aquí");
    }, 1500);
  } 

}



/*FUNCIÓN DESENCRIPTAR*/
function desencriptar() {
  // Obtiene el valor del texto ingresado en el elemento HTML con la clase "text-area" y lo convierte a minúsculas
  const textoEncriptado = document.querySelector(".text-area").value.toLowerCase();

  // Crea un objeto que contiene los valores encriptados y sus respectivas letras desencriptadas
  const valores = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" };

  // Reemplaza los valores encriptados "enter", "imes", "ai", "ober" y "ufat" en el textoEncriptado
  // utilizando una expresión regular y la función de reemplazo proporcionada por el objeto "valores"
  const textoDesencriptado = textoEncriptado.replace(/enter|imes|ai|ober|ufat/g, valor => valores[valor]);

  // Actualiza el contenido del elemento HTML con el id "mensaje" con el texto desencriptado
  document.querySelector("#mensaje").innerHTML = textoDesencriptado;

  // Borra el texto en el área de texto HTML con la clase "text-area"
  document.querySelector(".text-area").value = "";

  // Quita la imagen de fondo del elemento HTML con el id "mensaje"
  document.querySelector("#mensaje").style.backgroundImage = "none";
}



/*BOTON COPIAR*/
function copiar() {
  // Obtiene el contenido del elemento HTML con el id "mensaje"
  let mensaje = document.getElementById("mensaje").value;

  // Copia el contenido del mensaje al portapapeles del usuario utilizando la API del portapapeles
  navigator.clipboard.writeText(mensaje);
}



  
/*SOLO MINÚSCULAS Y SIN ACENTOS*/
const textArea = document.querySelector(".text-area");

// Agrega un evento de escucha al elemento HTML con la clase "text-area"
// para que cuando se ingrese texto, se realice una serie de transformaciones en el texto ingresado
textArea.addEventListener('input', (event) => {
  // Crea una expresión regular que coincide con cualquier caracter que no sea una letra minúscula o un espacio
  const regex = /[^a-z ]/g;

  // Convierte el valor del texto ingresado en minúsculas y luego reemplaza todos los caracteres
  // que no sean letras minúsculas o espacios por una cadena vacía, utilizando la expresión regular
  event.target.value = event.target.value.toLowerCase().replace(regex, '');
});




/*MODO ESCURO*/
function darkmode() {
  //le agrega y quita la clase "dark-mode al body" lo que hace que tome o no los estilos de la hoja dark-mode.css
  document.body.classList.toggle("dark-mode");
}

        