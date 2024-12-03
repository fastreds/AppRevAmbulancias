
////////////////////////////////   toastify     //////////////////////////////////

// <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
//toastify
const link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css";

// Agregar el elemento <link> al <head> del documento
document.head.appendChild(link);


//   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
//toastify
const script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://cdn.jsdelivr.net/npm/toastify-js";

// Agregar el elemento <script> al <head> del documento (o al body si prefieres)
document.head.appendChild(script);

function notificar(textRecived) {
    Toastify({
      text: textRecived,
      duration: 2000, // Duración en milisegundos
      gravity: "top", // top o bottom
      position: "left", // right o left
      backgroundColor: "linear-gradient(to right, #0072CE, #ccc)",
      stopOnFocus: true // Detiene la notificación si el usuario pasa el mouse por encima
    }).showToast();
  }

  //////////////////    fin toastify /////////////////////////////

/*
  ///////////////////////////////////bootstrap ///////////////////////////////////////

//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

// bootstrap
script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
document.head.appendChild(script);

////////////////////////////fin bootstrap //////////////////////////////////////////////



/////////////////////////////////////////  jsPDF  /////////////////////////////////////////////

// Crear y agregar el script para jsPDF
const jsPDFScript = document.createElement("script");
jsPDFScript.type = "text/javascript";
jsPDFScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
document.head.appendChild(jsPDFScript);

// Crear y agregar el script para EmailJS
const emailJSScript = document.createElement("script");
emailJSScript.type = "text/javascript";
emailJSScript.src = "https://cdn.emailjs.com/dist/email.min.js";
document.head.appendChild(emailJSScript);

/////////////////////////////////////////  fin jsPDF  /////////////////////////////////////////////

*/