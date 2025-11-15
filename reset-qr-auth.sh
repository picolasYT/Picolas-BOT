#!/bin/bash

# Script para resetear la autenticación del Picolas-BOT

echo "🤖 Picolas-BOT - Reset de Autenticación"
echo "======================================"
echo ""

if [ ! -d "assets" ]; then
    echo "❌ Error: Debes ejecutar este script en el directorio raíz del Picolas-BOT"
    echo "   Asegúrate de estar en la carpeta donde están las carpetas 'assets' y 'src'"
    exit 1
fi

if [ ! -d "assets/auth/baileys" ]; then
    echo "⚠️  La carpeta de autenticación no existe o ya fue removida"
    echo "   Ruta: ./assets/auth/baileys"
    exit 0
fi

echo "⚠️  ATENCIÓN: ¡Esta acción eliminará todos los archivos de autenticación del bot!"
echo "   Después de ejecutar este script, necesitarás:"
echo "   1. Eliminar el dispositivo antiguo en 'Dispositivos vinculados' de WhatsApp"
echo "   2. Iniciar el bot nuevamente con: npm start"
echo "   3. Ingresar el número del Picolas-BOT cuando lo pida"
echo ""
read -p "¿Deseas continuar? (s/N): " confirm

case $confirm in
    [sS]|[sS][iI])
        echo ""
        echo "🔄 Eliminando archivos de autenticación..."
        
        rm -rf ./assets/auth/baileys
        
        if [ $? -eq 0 ]; then
            echo "✅ ¡Archivos de autenticación eliminados con éxito!"
            echo ""
            echo "📝 Próximos pasos:"
            echo "   1. Ejecuta: npm start"
            echo "   2. Ingresa tu número para vincular el Picolas-BOT"
            echo "   3. Escanea el código o ingresa el código de emparejamiento"
        else
            echo "❌ Error al eliminar los archivos de autenticación"
            exit 1
        fi
        ;;
    *)
        echo "❌ Operación cancelada por el usuario"
        exit 0
        ;;
esac

echo ""
echo "🚀 ¡Picolas-BOT listo para reconfigurar su autenticación!"
