const form = document.getElementById("form");
const input = document.getElementById("email");

// En esta parte es donde se declara la expresion regular, que especifica la estructura del correo, desde que permite guiones, puntos y letras antes del @, hasta los dominios
const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

// Se pueden realizar diferentes validaciones oir cada parte, pero yo incluí si está vacío o si no tiene arroba
function validarEmail(email) {
  if (email === "") {
    return { valido: false, mensaje: "El campo debe de estar lleno" };
  }
  if (!email.includes("@")) {
    return { valido: false, mensaje: "El correo no tiene @" };
  }
  if (regexEmail.test(email)) {
    return { valido: true, mensaje: "Formato correcto" };
  } else {
    return { valido: false, mensaje: "Correo inválido" };
  }
}

//Aca se activa el proceso
function manejarEnvio(e) {
  // Esto es algo que no conocia, pero permite procesar los datos antes de recargar la pagina
  e.preventDefault();
  // Esta parte elimina espacios en blanco
  const email = input.value.trim();
  const resultado = validarEmail(email);
  alert(resultado.mensaje);
}

// Esto hace que la funcion se ejecute al prsionar el boton
form.addEventListener("submit", manejarEnvio);
