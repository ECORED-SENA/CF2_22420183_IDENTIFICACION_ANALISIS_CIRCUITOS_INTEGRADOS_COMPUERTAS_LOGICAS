export default {
  global: {
    componenteFormativo: 'Sistemas numéricos',
    descripcionCurso:
      'Los sistemas numéricos representan valores en diversas bases, como decimal, binario, octal y hexadecimal, cada uno con aplicaciones específicas. El álgebra de Boole, clave en sistemas digitales, utiliza operaciones lógicas (suma, multiplicación y negación) para simplificar circuitos electrónicos. Propiedades como identidad, inversa y el teorema de Morgan optimizan procesos y facilitan el análisis de sistemas electrónicos y computacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: 'Sistemas numéricos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema binario',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/22420183_CF02_DU.pdf',
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
  complementario: [
    {
      tema: 'Sistemas numéricos',
      referencia:
        'Electrónica FP. (2018). Sistemas numéricos: Binario, Decimal y Hexadecimal.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=g9-MRBBcvdg',
    },
    {
      tema: 'Sistema binario',
      referencia:
        'Matemáticas profe Alex. (2023). Números Binarios | Introducción',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=F1xB6oxmMWQ&t=52s',
    },
    {
      tema: 'Sistema binario',
      referencia: 'EDteam. (2023). ¿Qué es el sistema binario y como funciona?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-V4AbHyR_x4',
    },
  ],
  glosario: [
    {
      termino: 'Álgebra de Boole',
      significado:
        'rama del álgebra que trabaja con operaciones lógicas sobre valores binarios (0 y 1).',
    },
    {
      termino: 'Circuitos digitales',
      significado:
        'sistemas electrónicos que procesan información mediante niveles lógicos (0 y 1).',
    },
    {
      termino: 'Multiplicación lógica',
      significado:
        'operación booleana que devuelve 1 solo si todas las entradas son 1.',
    },
    {
      termino: 'Negación',
      significado:
        'operación booleana que invierte el estado lógico, cambiando 0 a 1 y viceversa.',
    },
    {
      termino: 'Sistema binario',
      significado:
        'sistema numérico de base 2 que utiliza los dígitos 0 y 1, empleado en sistemas electrónicos.',
    },
    {
      termino: 'Sistema decimal',
      significado:
        'sistema numérico de base 10 que utiliza los dígitos del 0 al 9.',
    },
    {
      termino: 'Sistemas numéricos',
      significado:
        'métodos de representación de números en diferentes bases como decimal, binario, octal y hexadecimal.',
    },
    {
      termino: 'Suma lógica (+)',
      significado:
        'operación booleana que devuelve 1 si al menos una entrada es 1.',
    },
    {
      termino: 'Tabla de verdad',
      significado:
        'representación de todas las posibles combinaciones de entrada y salida de una función lógica.',
    },
    {
      termino: 'Teorema de Morgan',
      significado:
        'regla del álgebra de Boole que simplifica la negación de expresiones lógicas compuestas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Carlospes, (s.f), Sistema de numeración romano. (s.f.). En Sitio web de Carlos Pes.',
      link:
        'https://www.carlospes.com/curso_representacion_datos/02_01_sistema_de_numeracion_romano.php',
    },
    {
      referencia: 'Cidead, (s.f), material interactivo sobre Lógica Binaria.',
      link: '',
    },
    {
      referencia:
        'Junta de Extremadura consejería de educación y empleo, (s.f), Laboratorio virtual de Lógica Binaria.',
      link: '',
    },
    {
      referencia:
        'Lloris, A. (2006). Capítulo 1: Introducción a los Sistemas digitales. En Sistemas Digitales 2 Ed. McGraw Hill.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Magda Melissa Rodríguez Celis',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada LLano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
