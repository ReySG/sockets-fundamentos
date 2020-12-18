var socket = io();

//Escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

//Escuchar
socket.on('disconnect', function () {
    console.log('Perdimos conexcion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta Server: ', resp);
});

//Escuchar
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});