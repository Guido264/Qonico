Lo que hace hasta el momento es linkear la imagen del server (node) con la imagen de la base de datos (mongodb) en un docker compose.

Para correrlo hay que crear el contenedor, parado en la carpeta rabbit-docker:

`docker-compose build`

Para correrlo:

`docker-compose up`

Para manejar la base de datos abrir un nuevo terminal y ejecutar:

`docker ps`

En el container que tiene la imagen mongo buscar la columna NAMES y ejecutar:

`docker exec -it (nombre) bash`

Para conectarse a la instancia de mongo creada con docker-compose ejecutar:

`mongo --port 27017` (no es necesario si el puerto es por defecto)

Para eliminar elementos de la base:

`show dbs`

Seleccionar la base:

`use NOMBRE DE LA BASE`

Para ver las colecciones dentro de la base:

`show collections`

Para ver contenido en la coleccion:

`db.nombredelacoleccion.find()`

Para eliminar los datos de la coleccion:

`db.nombredelacoleccion.drop()`

NOTAS: Docker compose viene incluido en la instalacion de Windows por defecto. En linux hay que instalarlo aparte https://docs.docker.com/compose/install/ .