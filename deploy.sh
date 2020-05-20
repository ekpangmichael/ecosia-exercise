#!/usr/bin/env bash

# terminal colours
blue=`tput setaf 4`
green=`tput setaf 2`
reset=`tput sgr0`

echoMessage() {
  echo  -e "${1}========================= ${2} ============================== ${reset} \n "
}

# Install necessary dependencies
buildDockerImage() {
  eval $(minikube docker-env --shell bash)
  echoMessage "${blue}" "building docker image"
  docker build -t tree .
  echoMessage "${green}" "Image built successfuly"
}

# Deploy the project 
deploy() {
  kubectl create ns ecosia
  echoMessage "${blue}" "Deploying application on minikube"
  kubectl apply -f manifest
  echoMessage "${green}" "Application deployed successfuly"
  echo "${green} You can visit the app via http://local.ecosia.org:30036/tree ${reset}"
}


start() {
  buildDockerImage
  deploy
}

start