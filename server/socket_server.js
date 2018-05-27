(function() {
  'use strict';


  const WebSocketServer = require('ws').Server;

  const ws = new WebSocketServer({
    port: 3001
  });

  ws.on('connection', function(ws) {
    console.log('客户端已经连接了');

    ws.on('message', function(message) {
      console.log(message);
      ws.send('我是服务端', function(err){ console.log(err); });
    })

  })


})();