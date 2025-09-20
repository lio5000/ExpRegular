const formemail = document.getElementById("formemail");
const inputemail = document.getElementById("email");

// En esta parte es donde se declara la expresion regular, que especifica la estructura del correo, desde que permite guiones, puntos y letras antes del @, hasta los dominios
const regexemail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

// Se pueden realizar diferentes validaciones oir cada parte, pero yo incluí si está vacío o si no tiene arroba
function validaremail(email) {
  if (email === "") {
    return { valido: false, mensaje: "El campo debe de estar lleno" };
  }
  if (!email.includes("@")) {
    return { valido: false, mensaje: "El correo no tiene @" };
  }
  if (regexemail.test(email)) {
    return { valido: true, mensaje: "Formato correcto" };
  } else {
    return { valido: false, mensaje: "Correo inválido" };
  }
}

//Aca se activa el proceso
function manejaremail(e) {
  // Esto es algo que no conocia, pero permite procesar los datos antes de recargar la pagina
  e.preventDefault();
  // Esta parte elimina espacios en blanco
  const email = inputemail.value.trim();
  const resultado = validaremail(email);
  alert(resultado.mensaje);
}

// Esto hace que la funcion se ejecute al prsionar el boton
formemail.addEventListener("submit", manejaremail);

const formnumeros = document.getElementById("formnumeros");
const parrafo = document.getElementById("parrafo");

// Esta expresiion solo cuenta numeros enteros
const regexenteros = /\b\d+\b/g;

function contador(texto) {
  const encontrados = texto.match(regexenteros);
  return encontrados ? encontrados.length : 0;
}

function manejarcant(e) {
  e.preventDefault();
  const texto = parrafo.value.trim();
  const cantidad = contador(texto);
  alert(`Se encontraron ${cantidad} números enteros en el parrafo`);
}

// al igual que arriba esto ejecuta la funcion
formnumeros.addEventListener("submit", manejarcant);
