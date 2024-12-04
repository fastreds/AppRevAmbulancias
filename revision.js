const startSection = document.getElementById("start-section");
const locationsSection = document.getElementById("locations-section");
const reviewSection = document.getElementById("review-section");
const summarySection = document.getElementById("summary-section");

const locationsList = document.getElementById("locations-list");
const equipmentList = document.getElementById("equipment-list");
const summaryList = document.getElementById("summary-list");

const startBtn = document.getElementById("start-btn");
const backToLocationsBtn = document.getElementById("back-to-locations");
const backToLocationsBtn2 = document.getElementById("back-to-locations2");
const goToSummaryBtn = document.getElementById("go-to-summary");
const saveBtn = document.getElementById("save-btn");


const reviewerInput = document.getElementById("reviewer");
const unitInput = document.getElementById("unit");


const  usuarios = [
  { userId: "MarcosOA", NombreUsuario: "Marcos Ortega", emailUsuario: "fastreds@gmail.com" },
  { userId: "AllanJJ", NombreUsuario: "Allan Jiménez", emailUsuario: "ALLAN.JIMENEZALPIZAR@ucr.ac.cr" },
  { userId: "JimmyM", NombreUsuario: "Jimmy Segura M", emailUsuario: "jimmy.segura@ucr.ac.cr " }

];


const  bodegas = [
  { bodegaId: "b1013", bodegaNombre: "Ambulancia 1013" },
  { bodegaId: "b782", bodegaNombre: "Ambulancia 782" },
  { bodegaId: "bOficinaParamed", bodegaNombre: "Bodega Oficina de Paramedicos" } ]


let reviewData = [];
let currentLocation = "";


 
usuarios.forEach(user => {
  const option = document.createElement('option');
  option.value = user.userId;                  
  option.textContent = user.NombreUsuario;
  reviewerInput.appendChild(option);
});

bodegas.forEach(bodega => {
  const option = document.createElement('option');
  option.value = bodega.bodegaId;
  option.textContent = bodega.bodegaNombre;
  unitInput.appendChild(option);
});



startBtn.addEventListener("click", () => {



  if (!reviewerInput.value || !unitInput.value) {
    notificar("Por favor, complete todos los campos.");
    return;
  }

  var DateTimeActual = new Date().toLocaleString();
  var reviewer = reviewerInput.value;
  var unit =   unitInput.value;
  DateTimeActual = DateTimeActual;

  // Crear el ID compuesto con formato limpio
  var id_revision = (reviewerInput.value  + unitInput.value  + DateTimeActual).replace(/[^a-zA-Z0-9]/g, "");

  reviewData = { id_revision, reviewer, unit, DateTimeActual, items: [] };

  console.log(reviewData);

  startSection.classList.add("d-none");
  locationsSection.classList.remove("d-none");
  renderLocations();
  initializeReviewData();

});








function formatDateToISO(date) {
  // Verificar si ya está en formato ISO (yyyy-MM-dd)
  const isoFormatRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (isoFormatRegex.test(date)) {
    return date; // Si ya está en formato ISO, devolver sin modificar
  }
  
  // Verificar si está en formato dd/MM/yyyy
  const ddMMyyyyRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (ddMMyyyyRegex.test(date)) {
    const [day, month, year] = date.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  
  // Si no cumple con ninguno de los formatos, devolver como está (o lanzar un error)
  console.warn(`Formato de fecha no reconocido: ${date}`);
  return date;
}


function renderOptionalCheckboxes(id_manipulado, opcionales) {

  
  console.log(`Rendering optionals for ID: ${id_manipulado}`, opcionales); // Log para entender qué se está renderizando

  console.log('datos revisados ', reviewData); // Log para entender qué se está renderizando

  itemGestionado = reviewData.items.find(item => item.id === id_manipulado);
  var opcionales1 = itemGestionado ? itemGestionado.Opcionales : null;

  return Object.entries(opcionales1).map(([key, opt]) => {
    switch (opt.Tipo.toLowerCase()) {
      case 'fecha':
        const formattedDate = formatDateToISO(opt.Valor); // Convertir fecha al formato correcto
        console.log(`Rendering date field: ${opt.Nombre}, Value: ${formattedDate}`);
        return `
          <div class="mb-3">
            <label for="${opt.Nombre}" class="form-label">${opt.Nombre}</label>
            <input type="date" class="form-control" id="${id_manipulado}-${opt.Nombre}-${key}" value="${formattedDate}">
          </div>
        `;
      case 'checkbox':
        console.log(`Rendering checkbox field: ${opt.Nombre}, Checked: ${opt.Valor}`);
        return `
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="${id_manipulado}-${opt.Nombre}-${key}" ${opt.Valor ? 'checked' : ''}>
            <label class="form-check-label" for="${opt.Nombre}">${opt.Nombre}</label>
          </div>
        `;
      case 'text':
        console.log(`Rendering text field: ${opt.Nombre}, Value: ${opt.Valor}`);
        return `
          <div class="mb-3">
            <label for="${opt.Nombre}" class="form-label">${opt.Nombre}</label>
            <input type="text" class="form-control" id="${id_manipulado}-${opt.Nombre}-${key}" value="${opt.Valor}">
          </div>
        `;
      default:
        console.warn(`Unsupported field type: ${opt.Tipo}`);
        return `<div class="text-muted">Tipo de campo no soportado: ${opt.Tipo}</div>`;
    }
  }).join("");
}

function attachOptionalListeners() {
  console.log("Attaching optional listeners...");

  document.querySelectorAll(".form-check-input, .form-control").forEach(input => {
    input.addEventListener("input", event => {
      const cardId = event.target.id.split("-")[0]; // Obtener el ID del ítem
      const fieldName = event.target.id.split("-")[1];// Obtener el nombre del campo en el array
      const value = event.target.type === "checkbox" ? event.target.checked : event.target.value; // Capturar el valor

      console.log(`Input changed: ID=${cardId}, Field=${fieldName}, Value=${value}`, event.target.id);

      try {
        const savedData = JSON.parse(localStorage.getItem("reviewData")); // Convertir desde JSON
        if (!savedData || !savedData.items) {
          console.error("reviewData not found or invalid in localStorage");
          return;
        }

        const item = savedData.items.find(i => i.id == cardId);
        if (!item) {
          console.warn(`Item with ID=${cardId} not found in reviewData`);
          return;
        }

        if (item.Opcionales) {
          const optionalField = Object.values(item.Opcionales).find(opt => opt.Nombre === fieldName);
          if (optionalField) {
            console.log(`Updating optional field: ${fieldName}, Old Value: ${optionalField.Valor}, New Value: ${value}`);
            optionalField.Valor = value; // Actualiza el valor del opcional

            // Guardar el estado actualizado en localStorage
            localStorage.setItem("reviewData", JSON.stringify(savedData));
            console.log("Updated reviewData saved to localStorage", savedData);

            if (loadReviewData()) {
              renderLocations(); // Renderiza las ubicaciones cargadas

            }

            
            renderLocations();
          } else {
            console.warn(`Optional field with name ${fieldName} not found in item`);
          }
        } else {
          console.warn(`Item with ID=${cardId} does not have opcionales`);
        }
      } catch (error) {
        console.error("Error parsing or updating reviewData:", error);
      }
    });
  });


 
  
}



function attachButtonListeners() {
  document.querySelectorAll(".btn-counter").forEach(button => {
    button.addEventListener("click", event => {
      const id = event.target.dataset.id;
      const action = event.target.dataset.action;
      const countElement = document.getElementById(`count-${id}`);
      let currentCount = parseInt(countElement.textContent);

      if (action === "increase") currentCount++;
      else if (action === "decrease" && currentCount > 0) currentCount--;

      countElement.textContent = currentCount;
      const item = reviewData.items.find(i => i.id == id);
      if (item) item.found = currentCount;
    });
  });
}

backToLocationsBtn.addEventListener("click", () => {
  reviewSection.classList.add("d-none");
  locationsSection.classList.remove("d-none");
  //saveReviewData();
  updateProgress();
});


// btn regresar que aparece en el resumen
backToLocationsBtn2.addEventListener("click", () => {
  summarySection.classList.add("d-none");
  locationsSection.classList.remove("d-none");
  updateProgress();
});

goToSummaryBtn.addEventListener("click", () => {
  renderSummary();


  locationsSection.classList.add("d-none");


});


function renderSummary() {
  const summaryList = document.getElementById('summary-list');
  summaryList.innerHTML = reviewData.items.map(item => {
    const suggestedQuantity = items.find(i => i.id === item.id).CantidadSugerida;
    const isQuantityLow = item.found < suggestedQuantity;
    const category = items.find(i => i.id === item.id).Categoria;
    const subcategory = items.find(i => i.id === item.id).SubCategoria;
    const location = items.find(i => i.id === item.id).Ubicacion;

    return `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 ${isQuantityLow ? 'border-danger' : ''}" data-category="${category}" data-subcategory="${subcategory}" data-location="${location}">
        <div class="card shadow-sm p-2 mb-2">
          <h5 class="card-title text-truncate">${items.find(i => i.id === item.id).NombreVisible}</h5>
          <p class="card-text text-truncate">
            Cantidad encontrada: <strong class="${isQuantityLow ? 'text-danger' : ''}">${item.found}</strong> / 
            <span class="${isQuantityLow ? 'text-danger' : ''}">${suggestedQuantity}</span>
          </p>
        </div>
      </div>
    `;
  }).join("");

  reviewSection.classList.add("d-none");
  summarySection.classList.remove("d-none");

  // Llenar los filtros de Categoría, Subcategoría y Ubicacion
  populateFilters();
}


function populateFilters() {
  const categories = [...new Set(items.map(item => item.Categoria))];
  const subcategories = [...new Set(items.map(item => item.SubCategoria))];
  const locations = [...new Set(items.map(item => item.Ubicacion))];

  const categorySelect = document.getElementById('filter-category');
  const subcategorySelect = document.getElementById('filter-subcategory');
  const locationSelect = document.getElementById('filter-location');

  categorySelect.innerHTML = '<option value="">Filtrar por Categoría</option>' + categories.map(c => `<option value="${c}">${c}</option>`).join('');
  subcategorySelect.innerHTML = '<option value="">Filtrar por SubCategoría</option>' + subcategories.map(s => `<option value="${s}">${s}</option>`).join('');
  locationSelect.innerHTML = '<option value="">Filtrar por Ubicacion</option>' + locations.map(l => `<option value="${l}">${l}</option>`).join('');
}



function filterSummary() {
  const category = document.getElementById('filter-category').value;
  const subcategory = document.getElementById('filter-subcategory').value;
  const location = document.getElementById('filter-location').value;

  const itemsToFilter = document.querySelectorAll('#summary-list .col-12');

  itemsToFilter.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    const itemSubcategory = item.getAttribute('data-subcategory');
    const itemLocation = item.getAttribute('data-location');

    const matchesCategory = !category || itemCategory === category;
    const matchesSubcategory = !subcategory || itemSubcategory === subcategory;
    const matchesLocation = !location || itemLocation === location;

    if (matchesCategory && matchesSubcategory && matchesLocation) {
      item.classList.remove('d-none');
    } else {
      item.classList.add('d-none');
    }
  });
}

function filterAlert() {
  const itemsToFilter = document.querySelectorAll('#summary-list .col-12');

  itemsToFilter.forEach(item => {
    const found = parseInt(item.querySelector('.card-text strong').textContent);
    const suggested = parseInt(item.querySelector('.card-text span').textContent);

    if (found < suggested) {
      item.classList.remove('d-none');
    } else {
      item.classList.add('d-none');
    }
  });


}



saveBtn.addEventListener("click", () => {

  // ver 10  // const ppwebRevisiones = "https://script.google.com/macros/s/AKfycbz-g62tk72weIgGPdtj46dN3Xutyz_tUihnh3Rif_yOyVB7B6YWqT5zhpzmTgnLraxljQ/exec";
  // ver 11 demo //
  const ppwebRevisiones = "https://script.google.com/macros/s/AKfycbxazMUZZMdhjQLq1yTdxgViO57n7Pr6JJC4Xhx_yoizviTiZMCLEAhGAss9elPwIizGpg/exec";


  localStorage.setItem("reviewData", JSON.stringify(reviewData));

  console.log(JSON.stringify(reviewData));

  fetch(ppwebRevisiones, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reviewData)
  }).then(response => {
    console.log('Datos enviados correctamente:', response);
  }).catch(error => {
    console.error('Error al enviar los datos:', error);
  });

  notificar("Revisión guardada exitosamente.");

  //// enviar correo de confirmacion

  sendEmail("fastreds@gmail.com", "Revisión guardada exitosamente.", "enviar el correo") ;




});


document.addEventListener("DOMContentLoaded", () => {
  if (loadReviewData()) {
    startSection.classList.add("d-none");
    locationsSection.classList.remove("d-none");
    renderLocations(); // Renderiza las ubicaciones cargadas

  }
});



function saveReviewData() {

  localStorage.setItem("reviewData", JSON.stringify(reviewData));
}

/* function loadReviewData() {
   const savedData = localStorage.getItem("reviewData");
   if (savedData) {
     reviewData = JSON.parse(savedData);
     startSection.classList.add("d-none");
     locationsSection.classList.remove("d-none");
   }
 }*/





function renderLocations() {   // cambia a verde
  const locations = [...new Set(items.map(item => item.Ubicacion))];
  locationsList.innerHTML = "";

  locations.forEach(location => {
    const totalItems = items.filter(item => item.Ubicacion === location).length;
    const reviewedItems = reviewData.items.filter(
      item => items.find(i => i.id === item.id).Ubicacion === location && item.revisado
    ).length;

    const locationButton = document.createElement("button");
    locationButton.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center";

    // Determinar el color de la badge
    const badgeColor = reviewedItems === totalItems ? 'bg-success' : 'bg-primary';


    locationButton.innerHTML = `
        ${location}
        <span class="badge ${badgeColor} rounded-pill">${reviewedItems}/${totalItems}</span>
      `;

    locationButton.addEventListener("click", () => showLocationItems(location));
    locationsList.appendChild(locationButton);
  });

}



/// genera la lista items par arevisar dentro de la locacion
function showLocationItems(location) {
  currentLocation = location;
  document.getElementById("current-location").textContent = location;

  // Filtrar elementos por Ubicacion y estado
  const filteredItems = items.filter(item => item.Ubicacion === location && item.Estado !== "No disponible");

  // Ordenar elementos: primero los no revisados
  filteredItems.sort((a, b) => {
    const reviewItemA = reviewData.items.find(i => i.id === a.id);
    const reviewItemB = reviewData.items.find(i => i.id === b.id);

    if (!reviewItemA || !reviewItemB) return 0; // Manejar casos sin revisión
    return reviewItemA.revisado - reviewItemB.revisado;
  });

  // Generar la lista de elementos
  equipmentList.innerHTML = "";
  filteredItems.forEach(item => {
    const reviewItem = reviewData.items.find(i => i.id === item.id);
    if (!reviewItem) return;

    const itemCard = document.createElement("div");
    itemCard.id = "card-" + item.id;
    itemCard.className = "card p-3";

    const image = "https://via.placeholder.com/50";
   
    itemCard.innerHTML = `
        <div class="card shadow-lg mb-4 border-light">
          <div class="row g-3">
            <!-- Image Section -->
            <div class="col-12 col-md-4">
              <img src="${image}" alt="Imagen" class="img-fluid rounded-3" />
            </div>
            
            <!-- Content Section -->
            <div class="col-12 col-md-8">
              <div class="card-body">
                <h5 class="card-title text-primary">${item.NombreVisible}</h5>
                <p class="card-text text-muted">${item.DetalleLargo}</p>
                
                <div class="mb-3">
                  <strong class="d-block mb-2">Opcionales:</strong>
                  <div class="d-flex flex-wrap">
                    ${renderOptionalCheckboxes(item.id, reviewItem.Opcionales)} 
                  </div>
                </div>
      
                <!-- Quantity Counter -->
                <div class="d-flex align-items-center mb-3">
                  <button class="btn btn-outline-danger btn-counter me-2" data-id="${item.id}" data-action="decrease">-</button>
                  <span id="count-${item.id}" class="fs-3 fw-bold">${reviewItem.found}</span>
                  <button class="btn btn-outline-danger btn-counter ms-2" data-id="${item.id}" data-action="increase">+</button>
                </div>
      
                <!-- Mark Reviewed Button -->
                <button class="btn btn-success w-100 mt-2 btn-verify" id="verify-${item.id}" ${reviewItem.revisado ? "disabled" : ""} onclick="markReviewed('${item.id}')">
                  ${reviewItem.revisado ? "Revisado" : "Marcar Revisado"}
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

    equipmentList.appendChild(itemCard);
  });

  
  //escucha los cambios en los opconales

  attachOptionalListeners();
  attachButtonListeners();
  attachVerifyListeners();
  locationsSection.classList.add("d-none");
  reviewSection.classList.remove("d-none");
}






  /////genera la estructura inicial 
  function initializeReviewData() {
    reviewData.items = items.map(item => ({
      id: item.id,
      found: item.CantidadSugerida,
      revisado: false,
      Opcionales: Object.fromEntries(
        Object.entries(item.Opcionales || {}).map(([key, opt]) => [
          key, 
          {
            Nombre: opt.Nombre,
            Valor: opt.Valor,
            Tipo: opt.Tipo
          }
        ])
      ),
      UbicacionOriginal: item.Ubicacion,
      categoria: item.Categoria
    }));
    saveReviewData();
    updateProgress();
  }


// carga los datos
function loadReviewData() {
  const savedData = localStorage.getItem("reviewData");
  if (savedData) {
    try {
      reviewData = JSON.parse(savedData);

      // Valida que los datos cargados sean consistentes
      if (!reviewData.items || !Array.isArray(reviewData.items)) {
        notificar("Datos corruptos en localStorage. Reiniciando revisión.");
        resetReview();
        return false;
      }

      return true; // Datos cargados correctamente
    } catch (e) {
      notificar("Error al cargar datos de localStorage. Reiniciando revisión.", e);
      resetReview();
    }
  }
  return false;
}

function resetReview() {
  if (confirm("¿Estás seguro de que deseas comenzar una nueva revisión? Se perderán los datos actuales.")) {
    localStorage.removeItem("reviewData");
    location.reload();
  }
}


// JavaScript function to hide the card when marked as "Revisado"
function markReviewed(itemId) {
  // Disable the button to prevent multiple clicks
  const button = document.getElementById(`verify-${itemId}`);
  button.disabled = true;
  button.innerText = 'Revisado';

  // Hide the card element by its ID
  const card = document.getElementById(`card-${itemId}`);
  if (card) {
    card.style.display = 'none';  // Hide the entire card
  }
}


function attachVerifyListeners() {
  document.querySelectorAll(".btn-verify").forEach(button => {
    button.addEventListener("click", event => {
      const id = event.target.id.split("-")[1];
      const item = reviewData.items.find(i => i.id == id);

      if (item) {
        item.revisado = true;
        event.target.textContent = "Revisado";
        event.target.disabled = true;
        saveReviewData();
        renderLocations();

      }
    });
  });
}


document.getElementById('reporte-btn').addEventListener('click', () => {
  window.location.href = "reporte.html";
});



document.getElementById('reporteFilaDatatable-btn').addEventListener('click', () => {
  window.location.href = "ReporteFilasPDF.html";
});




