@echo off
REM Script de configuracion para Ecuador Team App
REM Uso: setup.bat

echo ========================================
echo   Ecuador Team App - Configuracion
echo ========================================
echo.

REM Verificar Node.js
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js no esta instalado. Instalalo desde https://nodejs.org
    pause
    exit /b 1
)
for /f "delims=" %%i in ('node --version') do echo [OK] Node.js %%i

REM Verificar npm
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] npm no esta instalado.
    pause
    exit /b 1
)
for /f "delims=" %%i in ('npm --version') do echo [OK] npm %%i

REM Verificar Expo CLI
where expo >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [INFO] Instalando Expo CLI globalmente...
    call npm install -g expo-cli
) else (
    for /f "delims=" %%i in ('expo --version 2^>nul') do echo [OK] Expo CLI %%i
)

REM Instalar dependencias del proyecto
echo.
echo [INFO] Instalando dependencias del proyecto...
call npm install

echo.
echo ========================================
echo   Instalacion completada
echo ========================================
echo.
echo Para iniciar la aplicacion ejecuta:
echo   npx expo start
echo.
echo Luego escanea el codigo QR con Expo Go
echo en tu dispositivo movil.
echo.
echo Tambien puedes ejecutar:
echo   npx expo start --web    (navegador)
echo   npx expo start --android
echo   npx expo start --ios
echo ========================================
pause
