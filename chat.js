$(function () {
  var socket = io();
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  $('form').keypress(function(){
    socket.emit('live message', $('#m').val());
  });
  socket.on('chat message', (msg) => {
    $('#messages').append($('<li>').text(msg));
  });
});
