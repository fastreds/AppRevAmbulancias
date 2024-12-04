const  usuarios = [
    { userId: "MarcosOA", NombreUsuario: "Marcos Ortega", emailUsuario: "fastreds@gmail.com" },
    { userId: "AllanJJ", NombreUsuario: "Allan Jiménez", emailUsuario: "ALLAN.JIMENEZALPIZAR@ucr.ac.cr" },
    { userId: "JimmyM", NombreUsuario: "Jimmy Segura M", emailUsuario: "jimmy.segura@ucr.ac.cr " }
    

  ];


  const  bodegas = [
    { bodegaId: "b1013", bodegaNombre: "Ambulancia 1013" },
    { bodegaId: "b782", bodegaNombre: "Ambulancia 782" },
    { bodegaId: "bOficinaParamed", bodegaNombre: "Bodega Oficina de Paramedicos" },
    { bodegaId: "CarroEMerOBS", bodegaNombre: "CArro de Paro de OBS" } ];
  

const items = [
    {
      "id": 1500,
      "NombreVisible": "Paracetamol",
      "Categoria": "Medicamentos",
      "SubCategoria": "Analgesicos",
      "Ubicacion": "Botiquín",
      "tipoCampo": "Numerico",
      "CantidadSugerida": 2,
      "CantidadMinima": 5,
      "Estado": "Disponible",
      "Opcionales": {
        "Opcion1": {
          "Nombre": "FechaVencimiento",
          "Valor": "01/03/2025",
          "Tipo": "fecha"
        },
        "Opcion2": {
          "Nombre": "BuenEstado",
          "Valor": true,
          "Tipo": "Checkbox"
        }
      },
      "DetalleLargo": "Medicamento usado para aliviar el dolor y la fiebre.",
      "Imagen": "url_a_imagen_placeholder_1"
    },
    {
      "id": 200,
      "NombreVisible": "Ibuprofeno",
      "Categoria": "Medicamentos",
      "SubCategoria": "Antiinflamatorios",
      "Ubicacion": "Estante 2",
      "tipoCampo": "NoDefinido",
      "CantidadSugerida": 3,
      "CantidadMinima": 0,
      "Estado": "Disponible",
      "Opcionales": {
        "Opcion1": {
          "Nombre": "FechaVencimiento",
          "Valor": "15/07/2025",
          "Tipo": "fecha"
        },
        "Opcion2": {
          "Nombre": "FechaCompra",
          "Valor": "22/02/2020",
          "Tipo": "fecha"
        },
        "Opcion3": {
          "Nombre": "otroDato",
          "Valor": false,
          "Tipo": "checkbox"
        },
      
          "Opcion2d": {
            "Nombre": "FechaCompra",
            "Valor": "22/02/2020",
            "Tipo": "fecha"
          },
          "Opcion3d": {
            "Nombre": "otroDato",
            "Valor": false,
            "Tipo": "checkbox"
          },
          "Opcion4d": {
            "Nombre": "MiTexi",
            "Valor": "nd",
            "Tipo": "text"
          }
      },
      "DetalleLargo": "Usado para aliviar la inflamación y el dolor moderado.",
      "Imagen": "url_a_imagen_placeholder_2"
    },
    {
      "id": 300,
      "NombreVisible": "Amoxicilina",
      "Categoria": "Medicamentos",
      "SubCategoria": "Antibióticos",
      "Ubicacion": "Gabinete",
      "tipoCampo": "Numerico",
      "CantidadSugerida": 1,
      "CantidadMinima": 2,
      "Estado": "En Revisión",
      "Opcionales": {
        "Opcion1": {
          "Nombre": "FechaVencimiento",
          "Valor": "20/11/2024",
          "Tipo": "fecha"
        },
        "Opcion2": {
          "Nombre": "BuenEstado",
          "Valor": true,
          "Tipo": "Checkbox"
        }
      },
      "DetalleLargo": "Antibiótico usado para tratar infecciones bacterianas.",
      "Imagen": "url_a_imagen_placeholder_3"
    },
    {
      "id": 400,
      "NombreVisible": "Loratadina",
      "Categoria": "Medicamentos",
      "SubCategoria": "Antialérgicos",
      "Ubicacion": "Botiquín",
      "tipoCampo": "Numerico",
      "CantidadSugerida": 5,
      "CantidadMinima": 8,
      "Estado": "Disponible",
      "Opcionales": {
        "Opcion1": {
          "Nombre": "FechaVencimiento",
          "Valor": "10/09/2026",
          "Tipo": "fecha"
        },
        "Opcion2": {
          "Nombre": "BuenEstado",
          "Valor": true,
          "Tipo": "Checkbox"
        }
      },
      "DetalleLargo": "Medicamento para aliviar síntomas de alergias.",
      "Imagen": "url_a_imagen_placeholder_4"
    },
    {
      "id": 500,
      "NombreVisible": "Salbutamol",
      "Categoria": "Medicamentos",
      "SubCategoria": "Broncodilatadores",
      "Ubicacion": "Estante 3",
      "tipoCampo": "Numerico",
      "CantidadSugerida": 1,
      "CantidadMinima": 2,
      "Estado": "Disponible",
      "Opcionales": {
        "Opcion1": {
          "Nombre": "FechaVencimiento",
          "Valor": "05/05/2025",
          "Tipo": "fecha"
        },
        "Opcion2": {
          "Nombre": "BuenEstado",
          "Valor": true,
          "Tipo": "Checkbox"
        }
      },
      "DetalleLargo": "Inhalador para el tratamiento de asma y dificultad respiratoria.",
      "Imagen": "url_a_imagen_placeholder_5"
    },
    {
      "id": 600,
      "NombreVisible": "Omeprazol",
      "Categoria": "Medicamentos",
      "SubCategoria": "Gastrointestinales",
      "Ubicacion": "Cajón superior",
      "tipoCampo": "Numerico",
      "CantidadSugerida": 4,
      "CantidadMinima": 6,
      "Estado": "Disponible",
      "Opcionales": {
        "Opcion1": {
          "Nombre": "FechaVencimiento",
          "Valor": "25/12/2025",
          "Tipo": "fecha"
        },
        "Opcion2": {
          "Nombre": "BuenEstado",
          "Valor": true,
          "Tipo": "Checkbox"
        }
      },
      "DetalleLargo": "Medicamento para tratar problemas gástricos como reflujo.",
      "Imagen": "url_a_imagen_placeholder_6"
    },
    {
      "id": 700,
      "NombreVisible": "Metformina",
      "Categoria": "Medicamentos",
      "SubCategoria": "Antidiabéticos",
      "Ubicacion": "Gabinete central",
      "tipoCampo": "Numerico",
      "CantidadSugerida": 2,
      "CantidadMinima": 3,
      "Estado": "Disponible",
      "Opcionales": {
        "Opcion1": {
          "Nombre": "FechaVencimiento",
          "Valor": "01/08/2026",
          "Tipo": "fecha"
        },
        "Opcion2": {
          "Nombre": "BuenEstado",
          "Valor": true,
          "Tipo": "Checkbox"
        }
      },
      "DetalleLargo": "Usado para controlar niveles de glucosa en sangre.",
      "Imagen": "url_a_imagen_placeholder_7"
    },
    {
      "id": 800,
      "NombreVisible": "Atorvastatina",
      "Categoria": "Medicamentos",
      "SubCategoria": "Cardiovasculares",
      "Ubicacion": "Estante superior",
      "tipoCampo": "Numerico",
      "CantidadSugerida": 3,
      "CantidadMinima": 5,
      "Estado": "Disponible",
      "Opcionales": {
        "Opcion1": {
          "Nombre": "FechaVencimiento",
          "Valor": "18/06/2025",
          "Tipo": "fecha"
        },
        "Opcion2": {
          "Nombre": "BuenEstado",
          "Valor": true,
          "Tipo": "Checkbox"
        }
      },
      "DetalleLargo": "Medicamento para reducir niveles altos de colesterol.",
      "Imagen": "url_a_imagen_placeholder_8"
    },
    {
      "id": 900,
      "NombreVisible": "Clonazepam",
      "Categoria": "Medicamentos",
      "SubCategoria": "Ansiolíticos",
      "Ubicacion": "Botiquín",
      "tipoCampo": "Numerico",
      "CantidadSugerida": 1,
      "CantidadMinima": 2,
      "Estado": "Disponible",
      "Opcionales": {
        "Opcion1": {
          "Nombre": "FechaVencimiento",
          "Valor": "22/02/2025",
          "Tipo": "fecha"
        },
        "Opcion2": {
          "Nombre": "BuenEstado",
          "Valor": false,
          "Tipo": "Checkbox"
        }
      },
      "DetalleLargo": "Medicamento para el tratamiento de la ansiedad y convulsiones.",
      "Imagen": "url_a_imagen_placeholder_9"
    },
    {
      "id": 1000,
      "NombreVisible": "Ciprofloxacino",
      "Categoria": "Medicamentos",
      "SubCategoria": "Antibióticos",
      "Ubicacion": "Gabinete",
      "tipoCampo": "Numerico",
      "CantidadSugerida": 1,
      "CantidadMinima": 2,
      "Estado": "Disponible",
      "Opcionales": {
        "Opcion1": {
          "Nombre": "FechaVencimiento",
          "Valor": "30/04/2026",
          "Tipo": "fecha"
        },
        "Opcion2": {
          "Nombre": "BuenEstado",
          "Valor": true,
          "Tipo": "Checkbox"
        }
      },
      "DetalleLargo": "Antibiótico de amplio espectro para tratar infecciones graves.",
      "Imagen": "url_a_imagen_placeholder_10"
    },


   
   {

        id: 100,
        NombreVisible: "Paracetamol",
        Categoria: "Medicamentos",
        SubCategoria: "Analgesicos",
        Ubicacion: "Botiquín",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinima: 5,
        Estado: "Disponible",
        Opcionales: {
            Opcion1: {
                Nombre: "FechaVencimiento",
                Valor: "01/03/2025",
                Tipo: "fecha"
            },
            Opcion2: {
                Nombre: "BuenEstado",
                Valor: true,
                Tipo: "Checkbox"
            }
        },
        DetalleLargo: "Medicamento usado para aliviar el dolor y la fiebre.",
        Imagen: "url_a_imagen_placeholder_1"
    },
    {
        id: 200,
        NombreVisible: "Ibuprofeno",
        Categoria: "Medicamentos",
        SubCategoria: "Antiinflamatorios",
        Ubicacion: "Estante 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinima: 4,
        Estado: "Disponible",
        Opcionales: {
            Opcion1: {
                Nombre: "FechaVencimiento",
                Valor: "15/07/2025",
                Tipo: "fecha"
            },
            Opcion2: {
                Nombre: "BuenEstado",
                Valor: false,
                Tipo: "Checkbox"
            }
        },
        DetalleLargo: "Usado para aliviar la inflamación y el dolor moderado.",
        Imagen: "url_a_imagen_placeholder_2"
    },
    {
        id: 300,
        NombreVisible: "Amoxicilina",
        Categoria: "Medicamentos",
        SubCategoria: "Antibióticos",
        Ubicacion: "Gabinete",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinima: 2,
        Estado: "En Revisión",
        Opcionales: {
            Opcion1: {
                Nombre: "FechaVencimiento",
                Valor: "20/11/2024",
                Tipo: "fecha"
            },
            Opcion2: {
                Nombre: "BuenEstado",
                Valor: true,
                Tipo: "Checkbox"
            }
        },
        DetalleLargo: "Antibiótico usado para tratar infecciones bacterianas.",
        Imagen: "url_a_imagen_placeholder_3"
    },
    {
        id: 400,
        NombreVisible: "Loratadina",
        Categoria: "Medicamentos",
        SubCategoria: "Antialérgicos",
        Ubicacion: "Botiquín",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinima: 8,
        Estado: "Disponible",
        Opcionales: {
            Opcion1: {
                Nombre: "FechaVencimiento",
                Valor: "10/09/2026",
                Tipo: "fecha"
            },
            Opcion2: {
                Nombre: "BuenEstado",
                Valor: true,
                Tipo: "Checkbox"
            }
        },
        DetalleLargo: "Medicamento para aliviar síntomas de alergias.",
        Imagen: "url_a_imagen_placeholder_4"
    },
    {
        id: 500,
        NombreVisible: "Salbutamol",
        Categoria: "Medicamentos",
        SubCategoria: "Broncodilatadores",
        Ubicacion: "Estante 3",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinima: 2,
        Estado: "Disponible",
        Opcionales: {
            Opcion1: {
                Nombre: "FechaVencimiento",
                Valor: "05/05/2025",
                Tipo: "fecha"
            },
            Opcion2: {
                Nombre: "BuenEstado",
                Valor: true,
                Tipo: "Checkbox"
            }
        },
        DetalleLargo: "Inhalador para el tratamiento de asma y dificultad respiratoria.",
        Imagen: "url_a_imagen_placeholder_5"
    },
    {
        id: 600,
        NombreVisible: "Omeprazol",
        Categoria: "Medicamentos",
        SubCategoria: "Gastrointestinales",
        Ubicacion: "Cajón superior",
        tipoCampo: "Numerico",
        CantidadSugerida: 4,
        CantidadMinima: 6,
        Estado: "Disponible",
        Opcionales: {
            Opcion1: {
                Nombre: "FechaVencimiento",
                Valor: "25/12/2025",
                Tipo: "fecha"
            },
            Opcion2: {
                Nombre: "BuenEstado",
                Valor: true,
                Tipo: "Checkbox"
            }
        },
        DetalleLargo: "Medicamento para tratar problemas gástricos como reflujo.",
        Imagen: "url_a_imagen_placeholder_6"
    },
    {
        id: 700,
        NombreVisible: "Metformina",
        Categoria: "Medicamentos",
        SubCategoria: "Antidiabéticos",
        Ubicacion: "Gabinete central",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinima: 3,
        Estado: "Disponible",
        Opcionales: {
            Opcion1: {
                Nombre: "FechaVencimiento",
                Valor: "01/08/2026",
                Tipo: "fecha"
            },
            Opcion2: {
                Nombre: "BuenEstado",
                Valor: true,
                Tipo: "Checkbox"
            }
        },
        DetalleLargo: "Usado para controlar niveles de glucosa en sangre.",
        Imagen: "url_a_imagen_placeholder_7"
    },
    {
        id: 800,
        NombreVisible: "Atorvastatina",
        Categoria: "Medicamentos",
        SubCategoria: "Cardiovasculares",
        Ubicacion: "Estante superior",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinima: 5,
        Estado: "Disponible",
        Opcionales: {
            Opcion1: {
                Nombre: "FechaVencimiento",
                Valor: "18/06/2025",
                Tipo: "fecha"
            },
            Opcion2: {
                Nombre: "BuenEstado",
                Valor: true,
                Tipo: "Checkbox"
            }
        },
        DetalleLargo: "Medicamento para reducir niveles altos de colesterol.",
        Imagen: "url_a_imagen_placeholder_8"
    },
    {
        id: 900,
        NombreVisible: "Clonazepam",
        Categoria: "Medicamentos",
        SubCategoria: "Ansiolíticos",
        Ubicacion: "Botiquín",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinima: 2,
        Estado: "Disponible",
        Opcionales: {
            Opcion1: {
                Nombre: "FechaVencimiento",
                Valor: "22/02/2025",
                Tipo: "fecha"
            },
            Opcion2: {
                Nombre: "BuenEstado",
                Valor: false,
                Tipo: "Checkbox"
            }
        },
        DetalleLargo: "Medicamento para el tratamiento de la ansiedad y convulsiones.",
        Imagen: "url_a_imagen_placeholder_9"
    },
    {
        id: 1000,
        NombreVisible: "Ciprofloxacino",
        Categoria: "Medicamentos",
        SubCategoria: "Antibióticos",
        Ubicacion: "Gabinete",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinima: 2,
        Estado: "Disponible",
        Opcionales: {
            Opcion1: {
                Nombre: "FechaVencimiento",
                Valor: "30/04/2026",
                Tipo: "fecha"
            },
            Opcion2: {
                Nombre: "BuenEstado",
                Valor: true,
                Tipo: "Checkbox"
            }
        },
        DetalleLargo: "Antibiótico de amplio espectro para tratar infecciones graves.",
        Imagen: "url_a_imagen_placeholder_10"
    },


    {
        id: 2,
        NombreVisible: "Tubo endotraqueal #5",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Botiquín",
        tipoCampo: "Numerico",
        CantidadSugerida: 4,
        CantidadMinina: 2,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Tubo endotraqueal #5.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 3,
        NombreVisible: "Manta térmica",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Inmovilización",
        Ubicacion: "Anaquel 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción del Manta térmica.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 4,
        NombreVisible: "Guantes de látex",
        Categoria: "Varios",
        SubCategoria: "Instrumentos",
        Ubicacion: "Anaquel 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Guantes de látex.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 5,
        NombreVisible: "Sutura",
        Categoria: "Varios",
        SubCategoria: "Instrumentos",
        Ubicacion: "Caja Med 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 4,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Sutura.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 6,
        NombreVisible: "Ibuprofeno",
        Categoria: "Medicamentos",
        SubCategoria: "Analgésicos",
        Ubicacion: "Anaquel 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Ibuprofeno.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 7,
        NombreVisible: "Camilla",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Inmovilización",
        Ubicacion: "Anaquel 3",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de la Camilla.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 8,
        NombreVisible: "Mascarilla quirúrgica",
        Categoria: "Equipo de Protección Personal",
        SubCategoria: "Protección",
        Ubicacion: "Anaquel 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 10,
        CantidadMinina: 5,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción de la Mascarilla quirúrgica.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 9,
        NombreVisible: "Oxímetro",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Anaquel 4",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Oxímetro.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 10,
        NombreVisible: "Tensiómetro manual",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #1",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Tensiómetro manual.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 11,
        NombreVisible: "Cefalexina",
        Categoria: "Medicamentos",
        SubCategoria: "Antibióticos",
        Ubicacion: "Anaquel 5",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Cefalexina.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 12,
        NombreVisible: "Inmovilizador cervical",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Inmovilización",
        Ubicacion: "Anaquel 6",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción del Inmovilizador cervical.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 13,
        NombreVisible: "Guantes de nitrilo",
        Categoria: "Equipo de Protección Personal",
        SubCategoria: "Protección",
        Ubicacion: "Caja Med 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 10,
        CantidadMinina: 5,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción de los Guantes de nitrilo.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 14,
        NombreVisible: "Set diagnóstico",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Set diagnóstico.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 15,
        NombreVisible: "Mascarilla laríngea",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Anaquel 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de la Mascarilla laríngea.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 16,
        NombreVisible: "Termómetro digital",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #1",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Termómetro digital.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 17,
        NombreVisible: "Mascarilla con reservorio",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Anaquel 3",
        tipoCampo: "Numerico",
        CantidadSugerida: 4,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Mascarilla con reservorio.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 18,
        NombreVisible: "Foco pupilar",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Foco pupilar.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 19,
        NombreVisible: "Jeringa 20 cc",
        Categoria: "Varios",
        SubCategoria: "Instrumentos",
        Ubicacion: "Anaquel 4",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Jeringa 20 cc.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 20,
        NombreVisible: "Férula pediátrica",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Inmovilización",
        Ubicacion: "Anaquel 5",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de la Férula pediátrica.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 21,
        NombreVisible: "Cánula nasal",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Botiquín",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Cánula nasal.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 22,
        NombreVisible: "Esfigmomanómetro digital",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Anaquel 6",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Esfigmomanómetro digital.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 23,
        NombreVisible: "Torniquete",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Rescate",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción del Torniquete.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 24,
        NombreVisible: "Jeringa 3 cc",
        Categoria: "Varios",
        SubCategoria: "Instrumentos",
        Ubicacion: "Anaquel 3",
        tipoCampo: "Numerico",
        CantidadSugerida: 10,
        CantidadMinina: 5,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción de la Jeringa 3 cc.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 25,
        NombreVisible: "Papel film estéril",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Curaciones",
        Ubicacion: "Anaquel 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Papel film estéril.",
        Imagen: "url_a_imagen_placeholder"
    },
    // Continúa generando más elementos siguiendo esta estructura...
    {
        id: 26,
        NombreVisible: "Aguja hipodérmica #18",
        Categoria: "Varios",
        SubCategoria: "Instrumentos",
        Ubicacion: "Caja Med 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Aguja hipodérmica #18.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 27,
        NombreVisible: "Gasa estéril",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Curaciones",
        Ubicacion: "Anaquel 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 10,
        CantidadMinina: 5,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción de la Gasa estéril.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 28,
        NombreVisible: "Electrodos para monitor",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #1",
        tipoCampo: "Numerico",
        CantidadSugerida: 4,
        CantidadMinina: 2,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de los Electrodos para monitor.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 29,
        NombreVisible: "Férula rígida",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Inmovilización",
        Ubicacion: "Anaquel 3",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Férula rígida.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 30,
        NombreVisible: "Brazalete PNI",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Brazalete PNI.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 31,
        NombreVisible: "Camilla pediátrica",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Inmovilización",
        Ubicacion: "Gabeta #1",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de la Camilla pediátrica.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 32,
        NombreVisible: "Glucometro",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Diagnóstico",
        Ubicacion: "Anaquel 4",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Glucometro.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 33,
        NombreVisible: "Esfignomanómetro manual",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Esfignomanómetro manual.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 34,
        NombreVisible: "Parches para desfibrilador",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Anaquel 5",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de los Parches para desfibrilador.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 35,
        NombreVisible: "Torniquete de emergencia",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Rescate",
        Ubicacion: "Anaquel 6",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Torniquete de emergencia.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 36,
        NombreVisible: "Saturómetro",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #1",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Saturómetro.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 37,
        NombreVisible: "Tubo endotraqueal #7.5",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Botiquín",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Tubo endotraqueal #7.5.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 38,
        NombreVisible: "Mascarilla nebulizadora",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Anaquel 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 4,
        CantidadMinina: 2,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción de la Mascarilla nebulizadora.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 39,
        NombreVisible: "Gasa no estéril",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Curaciones",
        Ubicacion: "Anaquel 4",
        tipoCampo: "Numerico",
        CantidadSugerida: 10,
        CantidadMinina: 5,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de la Gasa no estéril.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 40,
        NombreVisible: "Caja de medicamentos",
        Categoria: "Varios",
        SubCategoria: "Medicamentos",
        Ubicacion: "Caja Med 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Caja de medicamentos.",
        Imagen: "url_a_imagen_placeholder"
    },
    // Continúa generando más elementos siguiendo esta estructura...
    {
        id: 41,
        NombreVisible: "Mascarilla con reservorio",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Botiquín",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Mascarilla con reservorio.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 42,
        NombreVisible: "Papel absorbente",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Curaciones",
        Ubicacion: "Anaquel 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Papel absorbente.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 43,
        NombreVisible: "Mascarilla laringea",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Mascarilla laringea.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 44,
        NombreVisible: "Catéter IV #18",
        Categoria: "Varios",
        SubCategoria: "Accesorios",
        Ubicacion: "Anaquel 3",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción del Catéter IV #18.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 45,
        NombreVisible: "Gafas de protección",
        Categoria: "Equipo de Protección Personal",
        SubCategoria: "Protección",
        Ubicacion: "Botiquín",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de las Gafas de protección.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 46,
        NombreVisible: "Jeringa 5cc",
        Categoria: "Varios",
        SubCategoria: "Instrumentos",
        Ubicacion: "Caja Med 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 10,
        CantidadMinina: 5,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción de la Jeringa 5cc.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 47,
        NombreVisible: "Oximetro de pulso",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Anaquel 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Oximetro de pulso.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 48,
        NombreVisible: "Termómetro digital",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #1",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción del Termómetro digital.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 49,
        NombreVisible: "Set diagnóstico",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Diagnóstico",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Set diagnóstico.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 50,
        NombreVisible: "Canula pediátrica",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Anaquel 3",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Canula pediátrica.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 51,
        NombreVisible: "Camilla plegable",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Inmovilización",
        Ubicacion: "Gabeta #1",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de la Camilla plegable.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 52,
        NombreVisible: "Casco de protección",
        Categoria: "Equipo de Protección Personal",
        SubCategoria: "Protección",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Casco de protección.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 53,
        NombreVisible: "Electrocardiógrafo",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Anaquel 4",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Electrocardiógrafo.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 54,
        NombreVisible: "Aguja hipodérmica #20",
        Categoria: "Varios",
        SubCategoria: "Instrumentos",
        Ubicacion: "Caja Med 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de la Aguja hipodérmica #20.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 55,
        NombreVisible: "Sonda nasogástrica",
        Categoria: "Varios",
        SubCategoria: "Accesorios",
        Ubicacion: "Anaquel 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Sonda nasogástrica.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 56,
        NombreVisible: "Papel de aluminio para curaciones",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Curaciones",
        Ubicacion: "Anaquel 5",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción del Papel de aluminio para curaciones.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 57,
        NombreVisible: "Mascarilla de oxígeno",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Anaquel 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Mascarilla de oxígeno.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 58,
        NombreVisible: "Pinzas hemostáticas",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Instrumentos",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de las Pinzas hemostáticas.",
        Imagen: "url_a_imagen_placeholder"
    },
    // Más ejemplos podrían continuar aquí.
    {
        id: 59,
        NombreVisible: "Torniquete",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Inmovilización",
        Ubicacion: "Gabeta #1",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Torniquete para control de hemorragias.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 60,
        NombreVisible: "Electrodo",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Anaquel 3",
        tipoCampo: "Numerico",
        CantidadSugerida: 10,
        CantidadMinina: 5,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción de los electrodos para monitoreo cardíaco.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 61,
        NombreVisible: "Brazalete PNI",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del brazalete para presión no invasiva.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 62,
        NombreVisible: "Foco pupilar",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Diagnóstico",
        Ubicacion: "Anaquel 4",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción del Foco pupilar para evaluación.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 63,
        NombreVisible: "Oftalmoscopio",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Diagnóstico",
        Ubicacion: "Anaquel 5",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción del Oftalmoscopio para examen ocular.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 64,
        NombreVisible: "Canula nasal",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Caja Med 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de la Canula nasal para oxigenoterapia.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 65,
        NombreVisible: "Jeringa 3cc",
        Categoria: "Varios",
        SubCategoria: "Instrumentos",
        Ubicacion: "Caja Med 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 10,
        CantidadMinina: 5,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción de la Jeringa 3cc.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 66,
        NombreVisible: "Pinza para curaciones",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Curaciones",
        Ubicacion: "Anaquel 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 2,
        CantidadMinina: 1,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Pinza para curaciones.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 67,
        NombreVisible: "Bomba manual para presión",
        Categoria: "Equipo de Signos Vitales",
        SubCategoria: "Monitoreo",
        Ubicacion: "Gabeta #1",
        tipoCampo: "Numerico",
        CantidadSugerida: 1,
        CantidadMinina: 1,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de la Bomba manual para medición de presión.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 68,
        NombreVisible: "Mascarilla para nebulización",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Botiquín",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de la Mascarilla para nebulización.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 69,
        NombreVisible: "Tubos endotraqueales #5",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Anaquel 3",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de los Tubos endotraqueales #5.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 70,
        NombreVisible: "Tubos endotraqueales #7.5",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Anaquel 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de los Tubos endotraqueales #7.5.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 71,
        NombreVisible: "Sondas orales",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Botiquín",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de las Sondas orales para oxigenoterapia.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 72,
        NombreVisible: "Vendas elásticas",
        Categoria: "Equipo de Trauma",
        SubCategoria: "Inmovilización",
        Ubicacion: "Gabeta #2",
        tipoCampo: "Numerico",
        CantidadSugerida: 4,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de las Vendas elásticas para inmovilización.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 73,
        NombreVisible: "Sistemas intravenosos",
        Categoria: "Varios",
        SubCategoria: "Accesorios",
        Ubicacion: "Caja Med 1",
        tipoCampo: "Numerico",
        CantidadSugerida: 5,
        CantidadMinina: 3,
        Estado: "En buen estado",
        Opcionales: {},
        DetalleLargo: "Descripción de los Sistemas intravenosos.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 74,
        NombreVisible: "Bolsas para transporte de líquidos",
        Categoria: "Varios",
        SubCategoria: "Accesorios",
        Ubicacion: "Gabeta #1",
        tipoCampo: "Numerico",
        CantidadSugerida: 3,
        CantidadMinina: 2,
        Estado: "Nuevo",
        Opcionales: {},
        DetalleLargo: "Descripción de las Bolsas para transporte de líquidos.",
        Imagen: "url_a_imagen_placeholder"
    },
    {
        id: 75,
        NombreVisible: "Cánulas orofaríngeas",
        Categoria: "Oxigenoterapia",
        SubCategoria: "Oxigenación",
        Ubicacion: "Anaquel 2",
        tipoCampo: "Numerico",
        CantidadSugerida: 4,
        CantidadMinina: 2,
        Estado: "Disponible",
        Opcionales: {},
        DetalleLargo: "Descripción de las Cánulas orofaríngeas.",
        Imagen: "url_a_imagen_placeholder"
    },
{
    "id": 1733252629824,
    "NombreVisible": "Cateter IV",
    "Categoria": "Intravenosos",
    "SubCategoria": "Desechables",
    "Ubicacion": "Anaquel 1",
    "tipoCampo": "NoDefinido",
    "CantidadSugerida": 3,
    "CantidadMinima": 0,
    "Estado": "Disponible",
    "Opcionales": {
        "Opcion1": {
            "Nombre": "#24",
            "Valor": "3",
            "Tipo": "text"
        },
        "Opcion2": {
            "Nombre": "#22",
            "Valor": "3",
            "Tipo": "text"
        },
        "Opcion3": {
            "Nombre": "#20",
            "Valor": "3",
            "Tipo": "text"
        },
        "Opcion4": {
            "Nombre": "#18",
            "Valor": "3",
            "Tipo": "text"
        },
        "Opcion5": {
            "Nombre": "#16",
            "Valor": "3",
            "Tipo": "text"
        },
        "Opcion6": {
            "Nombre": "#14",
            "Valor": "3",
            "Tipo": "text"
        }
    },
    "DetalleLargo": "3 cateter por tipo",
    "Imagen": ""
}
]

