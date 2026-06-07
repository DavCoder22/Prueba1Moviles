# Script de configuración y ejecución para Ecuador Team App
# Uso: .\setup.ps1

Write-Host "========================================"
Write-Host "  Ecuador Team App - Configuración"
Write-Host "========================================"
Write-Host ""

# Verificar Node.js
try {
    $nodeVersion = node --version
    Write-Host "[OK] Node.js $nodeVersion"
} catch {
    Write-Host "[ERROR] Node.js no está instalado. Instálalo desde https://nodejs.org"
    exit 1
}

# Verificar npm
try {
    $npmVersion = npm --version
    Write-Host "[OK] npm $npmVersion"
} catch {
    Write-Host "[ERROR] npm no está instalado."
    exit 1
}

# Verificar Expo CLI
try {
    $expoVersion = expo --version
    Write-Host "[OK] Expo CLI $expoVersion"
} catch {
    Write-Host "[INFO] Instalando Expo CLI globalmente..."
    npm install -g expo-cli
}

# Instalar dependencias del proyecto
Write-Host ""
Write-Host "[INFO] Instalando dependencias del proyecto..."
npm install

Write-Host ""
Write-Host "========================================"
Write-Host "  ¡Instalación completada!"
Write-Host "========================================"
Write-Host ""
Write-Host "Para iniciar la aplicación ejecuta:"
Write-Host "  npx expo start"
Write-Host ""
Write-Host "Luego escanea el código QR con Expo Go"
Write-Host "en tu dispositivo móvil."
Write-Host ""
Write-Host "También puedes ejecutar:"
Write-Host "  npx expo start --web    (navegador)"
Write-Host "  npx expo start --android"
Write-Host "  npx expo start --ios"
Write-Host "========================================"
