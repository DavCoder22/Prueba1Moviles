const PDFDocument = require("pdfkit");
const fs = require("fs");

const doc = new PDFDocument({ margin: 50 });
const output = fs.createWriteStream("EcuadorTeamApp_Documentacion.pdf");

doc.pipe(output);

const YELLOW = "#FFD100";
const BLUE = "#003893";
const RED = "#ED1C24";
const WHITE = "#FFFFFF";
const GRAY = "#F0F0F0";

function addHeader(text, y) {
  doc.rect(50, y, 495, 40).fill(BLUE);
  doc.fillColor(YELLOW).fontSize(18).font("Helvetica-Bold").text(text, 55, y + 10);
  return y + 50;
}

function addBody(text, y, opts = {}) {
  doc.fillColor("#333333")
    .fontSize(opts.size || 12)
    .font(opts.bold ? "Helvetica-Bold" : "Helvetica")
    .text(text, 50, y, { width: 495, align: opts.align || "left", ...opts });
  return y + (opts.spacing || 20);
}

// Portada
doc.rect(0, 0, doc.page.width, doc.page.height).fill(BLUE);

doc.fillColor(YELLOW).fontSize(40).font("Helvetica-Bold").text("ECUADOR TEAM APP", 50, 180, {
  align: "center",
  width: 495,
});

doc.fillColor(WHITE).fontSize(18).font("Helvetica").text("Aplicación Móvil con React Native + Expo", 50, 240, {
  align: "center",
  width: 495,
});

doc.fillColor(WHITE).fontSize(14).text("Selección Ecuatoriana de Fútbol", 50, 280, {
  align: "center",
  width: 495,
});

// Línea decorativa
doc.moveTo(150, 320).lineTo(445, 320).strokeColor(YELLOW).lineWidth(2).stroke();

doc.fillColor(WHITE).fontSize(11).text("Dispositivos Móviles - Examen 1", 50, 350, {
  align: "center",
  width: 495,
});

doc.fillColor(WHITE).fontSize(11).text("Junio 2026", 50, 370, {
  align: "center",
  width: 495,
});

doc.addPage();

// Índice
let yPos = 50;
yPos = addHeader("Índice", yPos);
yPos = addBody("1. Resumen del Proyecto", yPos, { spacing: 25 });
addBody("2. Estructura del Proyecto", yPos, { spacing: 25 });
yPos += 25;
addBody("3. Componentes Desarrollados", yPos, { spacing: 25 });
yPos += 25;
addBody("4. Tecnologías Utilizadas", yPos, { spacing: 25 });
yPos += 25;
addBody("5. Instrucciones de Ejecución", yPos, { spacing: 25 });
yPos += 25;
addBody("6. Enlace al Repositorio", yPos, { spacing: 25 });

doc.addPage();

// 1. Resumen
yPos = 50;
yPos = addHeader("1. Resumen del Proyecto", yPos);

yPos = addBody(
  "Ecuador Team App es una aplicación móvil básica desarrollada con React Native utilizando Expo Go como " +
    "entorno de desarrollo. La aplicación consta de dos pantallas principales: una pantalla de bienvenida " +
    "(Splash Screen) que muestra el logo tricolor de Ecuador con animaciones, y una pantalla de inicio " +
    "(Home Screen) que presenta información detallada de la Selección Ecuatoriana de Fútbol, incluyendo " +
    "datos como fundación, ranking FIFA, cuerpo técnico, récords y logros históricos.",
  yPos,
  { spacing: 25 }
);

yPos = addBody(
  "El objetivo del proyecto es familiarizarse con el entorno de desarrollo móvil, la estructura de un " +
    "proyecto Expo y los componentes fundamentales de React Native, como View, Text, ScrollView, " +
    "Animated API y la navegación entre pantallas mediante estado.",
  yPos,
  { spacing: 25 }
);

// 2. Estructura
yPos = addHeader("2. Estructura del Proyecto", yPos);

const structure = [
  "EcuadorTeamApp/",
  "├── assets/",
  "│   ├── icon.png",
  "│   └── splash-icon.png",
  "├── src/",
  "│   ├── components/",
  "│   │   └── TeamLogo.js",
  "│   ├── data/",
  "│   │   └── teamData.js",
  "│   └── screens/",
  "│       ├── SplashScreen.js",
  "│       └── HomeScreen.js",
  "├── App.js",
  "├── app.json",
  "├── package.json",
  "├── setup.bash",
  "└── README.md",
];

doc.font("Courier").fontSize(9).fillColor("#333333");
structure.forEach((line) => {
  doc.text(line, 60, yPos, { width: 470 });
  yPos += 14;
});

doc.addPage();

// 3. Componentes
yPos = 50;
yPos = addHeader("3. Componentes Desarrollados", yPos);

yPos = addBody("App.js", yPos, { bold: true, size: 13, spacing: 5 });
yPos = addBody(
  "Punto de entrada de la aplicación. Maneja la navegación entre SplashScreen y HomeScreen " +
    "mediante el estado isSplashDone. Mientras el splash no termina su animación, se muestra " +
    "SplashScreen; al finalizar, se renderiza HomeScreen.",
  yPos,
  { spacing: 20 }
);

yPos = addBody("SplashScreen.js", yPos, { bold: true, size: 13, spacing: 5 });
yPos = addBody(
  "Pantalla de bienvenida con fondo azul. Muestra el logo tricolor de Ecuador (TeamLogo) " +
    "con una animación de entrada (fade-in + spring scale) usando la API Animated de React Native. " +
    "La animación dura ~3 segundos y luego transiciona automáticamente al HomeScreen con un fade-out.",
  yPos,
  { spacing: 20 }
);

yPos = addBody("HomeScreen.js", yPos, { bold: true, size: 13, spacing: 5 });
yPos = addBody(
  "Pantalla principal con scroll que presenta la información del equipo. Incluye:\n" +
    "  • Header con logo y nombre del equipo\n" +
    "  • Sección de Información General (fundación, confederación, ranking FIFA, DT, capitán, estadio)\n" +
    "  • Sección de Récords (máximo goleador, más partidos)\n" +
    "  • Sección de Logros (participaciones mundialistas, Copa América)\n" +
    "  • Sección de Descripción",
  yPos,
  { spacing: 20 }
);

yPos = addBody("TeamLogo.js", yPos, { bold: true, size: 13, spacing: 5 });
yPos = addBody(
  "Componente reutilizable que dibuja un escudo con los colores de la bandera de Ecuador " +
    "(amarillo, azul, rojo) usando Views de React Native. Acepta una prop 'size' para " +
    "personalizar sus dimensiones.",
  yPos,
  { spacing: 20 }
);

yPos = addBody("teamData.js", yPos, { bold: true, size: 13, spacing: 5 });
yPos = addBody(
  "Archivo de datos que contiene las constantes de colores (COLORS) y la información del " +
    "equipo (TEAM_DATA): nombre, apodo, ranking FIFA, confederación, año de fundación, " +
    "director técnico, capitán, récords y logros.",
  yPos,
  { spacing: 25 }
);

// 4. Tecnologías
yPos = addHeader("4. Tecnologías Utilizadas", yPos);

yPos = addBody("• React Native 0.76 - Framework para desarrollo móvil multiplataforma", yPos, { spacing: 22 });
yPos = addBody("• Expo SDK 52 - Plataforma de desarrollo y pruebas con Expo Go", yPos, { spacing: 22 });
yPos = addBody("• Animated API - Animaciones nativas de React Native", yPos, { spacing: 22 });
yPos = addBody("• JavaScript (ES6+) - Lenguaje de programación", yPos, { spacing: 22 });
yPos = addBody("• npm - Gestor de paquetes", yPos, { spacing: 25 });

// 5. Instrucciones
yPos = addHeader("5. Instrucciones de Ejecución", yPos);

yPos = addBody("Requisitos previos:", yPos, { bold: true, spacing: 5 });
yPos = addBody("  • Node.js v18 o superior", yPos, { spacing: 18 });
yPos = addBody("  • Expo Go instalado en el dispositivo móvil", yPos, { spacing: 18 });
yPos = addBody("  • Git", yPos, { spacing: 22 });

yPos = addBody("Pasos para ejecutar la aplicación:", yPos, { bold: true, spacing: 5 });
yPos = addBody("  1. git clone https://github.com/DavCoder22/Prueba1Moviles.git", yPos, { spacing: 18 });
yPos = addBody("  2. cd EcuadorTeamApp", yPos, { spacing: 18 });
yPos = addBody("  3. npm install", yPos, { spacing: 18 });
yPos = addBody("  4. npx expo start", yPos, { spacing: 18 });
yPos = addBody("  5. Escanear el código QR con Expo Go", yPos, { spacing: 18 });
yPos = addBody("  (Alternativa: ejecutar bash setup.bash para automatizar)", yPos, { spacing: 25 });

// 6. Enlace
yPos = addHeader("6. Enlace al Repositorio", yPos);

doc.fillColor(BLUE).font("Helvetica").fontSize(14);
doc.text("https://github.com/DavCoder22/Prueba1Moviles.git", 50, yPos, {
  width: 495,
  align: "center",
  underline: true,
});

yPos += 50;

doc.fillColor("#333333").fontSize(10).text("Documento generado el 6 de junio de 2026", 50, yPos, {
  align: "center",
  width: 495,
});

doc.end();

console.log("PDF generado exitosamente: EcuadorTeamApp_Documentacion.pdf");
