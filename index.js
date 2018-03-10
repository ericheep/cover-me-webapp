var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/clone', (req, res) => {
    res.sendFile(__dirname + '/clone.html');
 });

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('live message', (msg) => {
    io.emit('live message', msg);
  });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
