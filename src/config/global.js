export default {
  global: {
    Name: 'Aplicación de Buenas Prácticas Piscícolas (BPP) y manejo sanitario en cultivos de aguas cálidas',
    Description:
      'El componente formativo desarrolla los principales aspectos relacionados con el manejo técnico, sanitario, nutricional y productivo en piscicultura. Explica la preparación del estanque, el acondicionamiento del agua, la siembra de alevinos, el control sanitario y el bienestar animal. Además, aborda la alimentación, nutrición, cálculo de raciones y manejo del cultivo para optimizar el crecimiento, reducir enfermedades y fortalecer la sostenibilidad y productividad piscícola.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manejo técnico previo al establecimiento del cultivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evaluación inicial del área de producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo y acondicionamiento del fondo del estanque',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Corrección fisicoquímica y sanitaria del sistema',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Mantenimiento hidráulico y operativo de la infraestructura',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Activación de la productividad biológica del estanque',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Ajuste ambiental y preparación para la siembra de alevinos',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Labores de manejo de la empresa durante el cultivo',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo del cultivo piscícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Buenas prácticas de piscicultura para la presiembra o fertilización del estanque',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Manejo en la siembra de alevinos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Labores de manejo en la empresa piscícola',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Programación de actividades productivas',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Manejo de registros productivos',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Control de condiciones del cultivo',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Programa de manejo sanitario y bienestar animal',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Bienestar animal en piscicultura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Bienestar animal: concepto y reconocimiento ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Programa de manejo sanitario',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Prevención de enfermedades',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Control de factores de estrés',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Manejo adecuado de la densidad poblacional',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Condiciones óptimas del ambiente',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Alimentación y nutrición en piscicultura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Introducción a la alimentación piscícola',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'La nutrición en peces',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Procesos de la nutrición',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Efectos de los nutrientes en los peces',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Requerimientos nutricionales según especie',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Importancia del cálculo de raciones',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo de la alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Forma de alimentar',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Horas de alimentación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipo de concentrado según etapa del pez',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Tablas de cálculo de raciones alimenticias',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Cálculo de raciones alimenticias',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Ajuste de la alimentación según condiciones',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Manejo del alimento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Almacenamiento del alimento',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Control de calidad del alimento',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Manejo de inventarios',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Prevención de contaminación',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Control de plagas',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Rotación del alimento',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acuicultura',
      significado:
        'Producción controlada de organismos acuáticos con fines comerciales o alimenticios.',
    },
    {
      termino: 'Amonio',
      significado:
        'Compuesto tóxico generado por desechos orgánicos y metabolismo de los peces.',
    },
    {
      termino: 'Biomasa',
      significado: 'Peso total de peces presentes en un sistema de cultivo.',
    },
    {
      termino: 'Conversión alimenticia',
      significado:
        'Relación entre alimento suministrado y crecimiento obtenido en los peces.',
    },
    {
      termino: 'Desove',
      significado:
        'Proceso reproductivo mediante el cual los peces liberan huevos y esperma.',
    },
    {
      termino: 'Eclosión',
      significado:
        'Momento en que las larvas salen del huevo después del desarrollo embrionario.',
    },
    {
      termino: 'Fertilización',
      significado:
        'Aplicación de nutrientes para estimular producción natural en el estanque.',
    },
    {
      termino: 'Hacinamiento',
      significado:
        'Exceso de peces en un espacio reducido que genera estrés y competencia.',
    },
    {
      termino: 'Larvicultura',
      significado:
        'Etapa de cultivo enfocada en el manejo y desarrollo de larvas.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Seguimiento periódico de parámetros productivos, sanitarios y ambientales del cultivo.',
    },
    {
      termino: 'Patógeno',
      significado:
        'Organismo capaz de causar enfermedades en peces u otros organismos acuáticos.',
    },
    {
      termino: 'Productividad',
      significado:
        'Capacidad del sistema de cultivo para generar producción eficiente de peces.',
    },
    {
      termino: 'Ración alimenticia',
      significado:
        'Cantidad de alimento suministrada diariamente a los peces según necesidades.',
    },
    {
      termino: 'Sedimento',
      significado:
        'Material orgánico e inorgánico acumulado en el fondo del estanque.',
    },
    {
      termino: 'Tasa de crecimiento',
      significado:
        'Incremento de peso o tamaño de los peces durante el cultivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'AUNAP. (2024). Lineamientos técnicos para la producción acuícola sostenible en Colombia. Autoridad Nacional de Acuicultura y Pesca.',
      link: '',
    },
    {
      referencia:
        'AUNAP. (2024). Lineamientos técnicos para la producción acuícola sostenible en Colombia. Autoridad Nacional de Acuicultura y Pesca.',
      link: '',
    },
    {
      referencia:
        'FAO. (2024). Nutritional requirements of Nile tilapia (Oreochromis niloticus). Food and Agriculture Organization of the United Nations.',
      link: '',
    },
    {
      referencia:
        'FAO. (2024). El estado mundial de la pesca y la acuicultura 2024. Food and Agriculture Organization of the United Nations.',
      link: '',
    },
    {
      referencia:
        'SENA. (2024). Materiales de formación en piscicultura y acuicultura. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia:
        'Solla S.A. (2024). Guía técnica de nutrición y alimentación para peces. Solla S.A.',
      link: '',
    },
    {
      referencia:
        'Universidad de los Llanos. (2023). Manual técnico de piscicultura continental. Instituto de Acuicultura de los Llanos.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },

    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderon Gutiérrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristian Fernando Martínez Sánchez',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },

    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
