
var jsonModelo = "equipment_array.json";

// Función para cargar y leer el archivo JSON de manera síncrona
function cargarItemsSinc() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', jsonModelo, false);  // `false` hace que la solicitud sea síncrona
    xhr.setRequestHeader('Content-Type', 'application/json');

    try {
        xhr.send();  // Envía la solicitud
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);  // Procesar la respuesta JSON
            console.log("Items generados desde JSON:", data);
            return data;
        } else {
            console.error('Error al cargar el archivo JSON:', xhr.statusText);
        }
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

// Llamar a la función para cargar los items
function obtenerItemsSinc() {
    const items = cargarItemsSinc();  // Llama a la función síncrona
    console.log("Items obtenidos:", items);
    return items;  // Retorna los items cargados
}

// Obtener los items
const items = obtenerItemsSinc();  // Aquí obtienes los items de manera síncrona




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



///////////////// enviar correo generico ////////////////////

const scriptURLCorreos = "https://script.google.com/macros/s/AKfycbw6I6TcDab7w3qiXrGPRpr4FbnUxdK6kqPsIWVi6cohcwBPlC02NVLH1TVa6ylp80UJzA/exec"; 


 function sendEmail(email, subject, message) {
  const data = {
    email: email,
    subject: subject,
    message: message,
  };

  try {
    const response =  fetch(scriptURLCorreos, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    const result =  response.json();
    if (result.success) {
      alert("Correo enviado con éxito.");
    } else {
      throw new Error(result.error || "Error desconocido.");
    }
  } catch (error) {
    alert("Error al enviar el correo: " + error.message);
  }
}

//sendEmail("fastreds@gmail.com", "test", "enviar el correo") ;



















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