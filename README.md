# Ecuador Team App ⚽🇪🇨

Aplicación móvil básica desarrollada con **React Native + Expo Go** que muestra información de la **Selección Ecuatoriana de Fútbol**.

## Características

- **Splash Screen**: Pantalla de bienvenida animada con el logo tricolor de Ecuador (amarillo, azul, rojo).
- **Home Screen**: Pantalla principal con información del equipo: fundación, ranking FIFA, director técnico, capitán, récords y logros.

## Estructura del proyecto

```
EcuadorTeamApp/
├── assets/                  # Recursos estáticos (iconos, splash)
├── src/
│   ├── components/
│   │   └── TeamLogo.js      # Componente del escudo tricolor
│   ├── data/
│   │   └── teamData.js      # Datos del equipo ecuatoriano
│   └── screens/
│       ├── SplashScreen.js  # Pantalla de bienvenida animada
│       └── HomeScreen.js    # Pantalla de inicio con info del equipo
├── App.js                   # Punto de entrada de la app
├── app.json                 # Configuración de Expo
├── package.json             # Dependencias del proyecto
├── setup.bash               # Script para instalar y ejecutar (Linux/macOS)
└── setup.ps1                # Script para instalar y ejecutar (Windows)
```

## Requisitos previos

- Node.js v18+
- Expo CLI (`npm install -g expo-cli`)
- Expo Go instalado en tu dispositivo móvil (iOS/Android)

## Cómo ejecutar

```bash
# 1. Clonar el repositorio
git clone https://github.com/DavCoder22/Prueba1Moviles.git
cd Prueba1Moviles

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npx expo start

# 4. Escanear el código QR con Expo Go en tu dispositivo
```

O usando el script automatizado:

**Windows (PowerShell):**
```powershell
.\setup.ps1
```

**Linux/macOS:**
```bash
chmod +x setup.bash
./setup.bash
```

## Tecnologías usadas

- **React Native** — Framework para desarrollo móvil multiplataforma
- **Expo Go** — Entorno de desarrollo y pruebas
- **Animated API** — Animaciones nativas de React Native
