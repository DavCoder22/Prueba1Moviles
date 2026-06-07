#!/bin/bash
# Script de configuración y ejecución para Ecuador Team App
# Uso: bash setup.bash

set -e

echo "========================================"
echo "  Ecuador Team App - Configuración"
echo "========================================"
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "[ERROR] Node.js no está instalado. Instálalo desde https://nodejs.org"
    exit 1
fi
echo "[OK] Node.js $(node --version)"

# Verificar npm
if ! command -v npm &> /dev/null; then
    echo "[ERROR] npm no está instalado."
    exit 1
fi
echo "[OK] npm $(npm --version)"

# Verificar o instalar Expo CLI
if ! command -v expo &> /dev/null; then
    echo "[INFO] Instalando Expo CLI globalmente..."
    npm install -g expo-cli
fi
echo "[OK] Expo CLI $(expo --version 2>/dev/null || echo 'instalado')"

# Instalar dependencias del proyecto
echo ""
echo "[INFO] Instalando dependencias del proyecto..."
npm install

echo ""
echo "========================================"
echo "  ¡Instalación completada!"
echo "========================================"
echo ""
echo "Para iniciar la aplicación ejecuta:"
echo "  npx expo start"
echo ""
echo "Luego escanea el código QR con Expo Go"
echo "en tu dispositivo móvil."
echo ""
echo "También puedes ejecutar:"
echo "  npx expo start --web    (navegador)"
echo "  npx expo start --android"
echo "  npx expo start --ios"
echo "========================================"
