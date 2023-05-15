  
  /*FUNCIÓN ENCRIPTAR*/
  function encriptar() {
    const texto = document.querySelector(".text-area").value.toLowerCase(); 
    const valores = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };
    const textoEncriptado = texto.replace(/[eiaou]/img, letra => valores[letra]);

    document.querySelector("#mensaje").innerHTML = textoEncriptado;
    document.querySelector(".text-area").value = ""; 
    document.querySelector("#mensaje").style.backgroundImage = "none"; 
  }
  
   /*toma el valor del texto que se escribe, lo pasa a mínuscula y lo guarda en la constante*/
  /*guarda el valor de cada letra con su valor encriptado*/
  /*reemplaza las letras (mayúsculas o minúsculas de todas las líneas) por su valor encriptado y los guarda en la constante*/
  /*muestra el texto encriptado en el area mensaje
  // borra el texto en el área de texto
  // quita la imagen de fondo del area mensaje
  
  /*FUNCIÓN DESENCRIPTAR*/
  function desencriptar() {
    const textoEncriptado = document.querySelector(".text-area").value.toLowerCase();
    const valores = { "enter": "e", "imes": "i", "ai": "a", "ober": "o", "ufat": "u" };
    const textoDesencriptado = textoEncriptado.replace(/enter|imes|ai|ober|ufat/g, valor => valores[valor]);
  
    document.querySelector("#mensaje").innerHTML = textoDesencriptado;
    document.querySelector(".text-area").value = ""; 
    document.querySelector("#mensaje").style.backgroundImage = "none"; 
  }
  

        
  /*BOTON COPIAR*/
  function copiar() { 
    let mensaje = document.getElementById("mensaje").value;  // Obtiene el contenido del elemento "mensaje"
    navigator.clipboard.writeText(mensaje);  // Copia el contenido del mensaje al portapapeles
  }
          


  /*SOLO MINÚSCULAS Y SIN ACENTOS*/
  const textArea = document.querySelector(".text-area");

  textArea.addEventListener('input', (event) => {
  const regex = /[^a-z ]/g; // Expresión regular que permite solo letras minúsculas sin acentos y espacios
  event.target.value = event.target.value.toLowerCase().replace(regex, '');
 });

          
  /*MODO ESCURO*/
  function darkmode() {
    document.body.classList.toggle("dark-mode");

  }

        