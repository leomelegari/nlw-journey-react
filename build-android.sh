#!/bin/bash

# Caminho do projeto React
REACT_DIR=$(pwd)

# Caminho do projeto Cordova
CORDOVA_DIR="$REACT_DIR/cordova"

# Construir o projeto React
cd $REACT_DIR
npm run build

# Mover para o diretório Cordova
cd $CORDOVA_DIR

# Adicionar plataforma Android (caso não esteja adicionada)
cordova platform add android

# Construir o projeto Cordova para Android
cordova prepare android

# Finalizado
echo "Build para Android concluída!"
