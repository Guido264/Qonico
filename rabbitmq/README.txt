Este modulo envia mensajes al siguiente cliente rabbitmq:

Dev RabbitMQ admin panel:
http://dev.qonico.com:15672
user: qonico
pass: qonico-dev-sfo2

Luego de loguearse en el cliente rabbit se crea un servidor y se envian y reciben mensajes hacia y desde la cola creada.

http-server:

En http-server esta el servidor que se encarga de gestionar las peticiones post. En esa peticion se envia el mensaje a la cola Rabbitmq.

Para iniciar el servidor abrir un terminal e ir a la carpeta server y alli ejecutar "node index.js" (sin comillas). 

publisher:

Publisher tiene un loop de 100 mensajes aleatorios que iran como contenido de la funcion fetch para realizar la peticion post al server.

Para ejecutarlo abrir otra terminal, ir a la carpeta publisher y ejecutar "node publisher.js" (sin comillas), esto enviara los mensajes al servidor.

consumer:

Consumer muestra por consola todos los mensajes que esten en la cola hasta el momento de ejecucion.

Para ejecutarlo abrir otra terminal, ir a la carpeta consumer y ejecutar "node consumer.js" (sin comillas), esto imprimira los mensajes por consola.


Notas:

Se siguio el siguiente tutorial de la pagina oficial:

https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
