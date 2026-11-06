@echo off
title SK ABDUL SABBIR - Portfolio Dev Server
cd /d "%~dp0"

echo ===================================================
echo   Starting Portfolio for SK ABDUL SABBIR
echo ===================================================
echo.

if not exist "node_modules\" (
    echo [INFO] First time run detected. Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERROR] npm install failed. Please ensure Node.js is installed.
        pause
        exit /b %errorlevel%
    )
)

echo [INFO] Launching local Vite development server...
echo [INFO] Opening portfolio at http://localhost:3000 ...
echo.
echo Press Ctrl+C in this window anytime to stop the server.
echo ===================================================
echo.

call npm run dev -- --open --port 3000
pause

