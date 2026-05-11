import { rutas } from "../lib/rutas";
import directivasData from "./directivas.json";
import documentosOficialesData from "./documentosOficiales.json";
import pieContenidoData from "./pieContenido.json";

export const menu = [
  { label: "Inicio", href: rutas.inicio },
  {
    label: "Nuestra Escuela",
    href: rutas.quienesSomos,
    children: [
      { label: "Quienes somos", href: rutas.quienesSomos },
      { label: "Directiva", href: rutas.directivas },
      { label: "Programa de Integracion Escolar (PIE)", href: rutas.pie },
      { label: "Departamento de orientacion", href: rutas.orientacion },
      { label: "Departamento de informatica", href: rutas.informatica }
    ]
  },
  {
    label: "Documentos oficiales",
    href: rutas.documentos,
    children: documentosOficialesData.documentos.map((documento) => ({
      label: documento.titulo,
      href: documento.href,
      external: true
    }))
  },
  { label: "Talleres", href: rutas.talleres },
  { label: "Noticias", href: rutas.noticias },
  { label: "Contacto", href: rutas.contacto }
];

export const slides = [
  {
    image: "/images/slide1.png",
    title: "Bienvenido a tu\nEscuela Esperanza",
    subtitle: "Escuela Esperanza",
    extra: "",
    button: "",
    href: rutas.inicio
  },
  {
    image: "/images/slide2.png",
    title: "Visita Nuestra escuela\nY encontraras esperanza",
    subtitle: "Escuela Esperanza",
    extra: "",
    button: "Leer mas",
    href: rutas.quienesSomos
  },
  {
    image: "/images/slide3.png",
    title: "Talleres\nExtraescolares 2026",
    subtitle: "Educacion basica - Escuela Esperanza",
    extra: "",
    button: "Leer mas",
    href: rutas.talleres
  }
];

export const textoTemporal =
  "Informacion oficial en preparacion. Este espacio se actualizara cuando el establecimiento confirme el contenido definitivo.";

export const quienesSomosResumen = {
  titulo: "Quienes somos?",
  subtitulo: "Escuela Esperanza",
  texto:
    "Somos una comunidad educativa en desarrollo permanente. Pronto incorporaremos una presentacion oficial con la historia, sello y principales caracteristicas de la escuela.",
  boton: "Leer mas",
  href: rutas.quienesSomos,
  imagen: "/images/slide2.png"
};

export const quienesSomosDetalle = {
  titulo: "Escuela Esperanza",
  texto: [
    "La informacion institucional completa se encuentra en preparacion. Este espacio reunira la historia, identidad y principales hitos de la Escuela Esperanza.",
    "Mientras se valida el contenido oficial, la pagina mantiene una estructura clara para presentar de forma ordenada la informacion del establecimiento.",
    "Cuando el equipo cuente con los textos definitivos, esta seccion podra actualizarse sin cambiar el diseno general del sitio."
  ],
  imagen: "/images/slide2.png"
};

export const talleres = [
  {
    titulo: "Taller Programacion y robotica",
    slug: "programacion-robotica",
    href: `${rutas.talleres}programacion-robotica/`,
    imagen: "/images/slide3.png",
    descripcion: [
      "Un espacio para explorar pensamiento logico, creatividad y tecnologia mediante desafios practicos.",
      "La descripcion oficial del taller se incorporara cuando el establecimiento confirme horarios, responsables y objetivos."
    ]
  },
  {
    titulo: "Taller de musica",
    slug: "musica",
    href: `${rutas.talleres}musica/`,
    imagen: "/images/slide1.png",
    descripcion: [
      "Una instancia para acercarse al ritmo, la expresion y el trabajo colaborativo a traves de la musica.",
      "La descripcion oficial del taller se incorporara cuando el establecimiento confirme horarios, responsables y objetivos."
    ]
  },
  {
    titulo: "Taller de danza",
    slug: "danza",
    href: `${rutas.talleres}danza/`,
    imagen: "/images/slide2.png",
    descripcion: [
      "Un taller pensado para potenciar movimiento, expresion corporal, disciplina y confianza.",
      "La descripcion oficial del taller se incorporara cuando el establecimiento confirme horarios, responsables y objetivos."
    ]
  },
  {
    titulo: "Taller de Voleibol",
    slug: "voleibol",
    href: `${rutas.talleres}voleibol/`,
    imagen: "/images/slide11.png",
    descripcion: [
      "Una actividad deportiva para fortalecer coordinacion, companerismo y participacion activa.",
      "La descripcion oficial del taller se incorporara cuando el establecimiento confirme horarios, responsables y objetivos."
    ]
  },
  {
    titulo: "Taller de Futsal",
    slug: "futsal",
    href: `${rutas.talleres}futsal/`,
    imagen: "/images/slide22.png",
    descripcion: [
      "Un taller deportivo para desarrollar habilidades, respeto por las reglas y trabajo en equipo.",
      "La descripcion oficial del taller se incorporara cuando el establecimiento confirme horarios, responsables y objetivos."
    ]
  }
];

export const directivas = directivasData.directivas.map((directiva) => ({
  ...directiva,
  href: `${rutas.directivas}${directiva.slug}/`
}));

export const documentosOficiales = documentosOficialesData.documentos;

export const instagramInicio = {
  cuenta: "@escuela_esperanzatalca",
  nombre: "Escuela Esperanza",
  href: "https://www.instagram.com/escuela_esperanzatalca/",
  publicaciones: [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
    "/images/slide11.png",
    "/images/slide22.png",
    "/images/slide33.png"
  ]
};

export const accesosCircularesInicio = [
  {
    titulo: "Mision de la escuela",
    texto: "Texto oficial en preparacion. Aqui se presentara la mision institucional validada por la escuela.",
    href: "#mision",
    icono: "fa-compass"
  },
  {
    titulo: "Vision de la escuela",
    texto: "Texto oficial en preparacion. Aqui se presentara la vision institucional validada por la escuela.",
    href: "#vision",
    icono: "fa-eye"
  }
];

export const pieContenido = pieContenidoData;

export const seccionesInstitucionalesPagina = [
  { titulo: "Mision de la escuela", id: "mision" },
  { titulo: "Vision de la escuela", id: "vision" },
  ...documentosOficiales
];
