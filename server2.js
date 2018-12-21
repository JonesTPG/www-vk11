var app = require('../app');
var debug = require('debug')('ht:server');
var http = require('http');

/*app.listen-komento pitää olla erotettuna päätiedostosta, muuten jest varoittaa että mongodb jää auki testatessa.*/


var port = config.APP_PORT | 4000
app.listen(port)
