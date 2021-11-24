/* Encontrar uma porta TCP livre  */

var net = require('net');

var srv = net.createServer()

srv.listen(0, function() {
  console.log('Listening on port ' + srv.address().port);
});