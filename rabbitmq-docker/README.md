Lo que hace hasta el momento es linkear la imagen del server (node) con la imagen de la base de datos (mongodb) en un docker compose.

Para correrlo hay que crear el contenedor, parado en la carpeta rabbit-docker:

docker-compose build

Para correrlo:

docker-compose up



NOTAS: Docker compose viene incluido en la instalacion de Windows por defecto. En linux hay que instalarlo aparte https://docs.docker.com/compose/install/ .