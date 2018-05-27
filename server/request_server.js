(function() {
  "use strict"

  const http = require('http')
  http.createServer(function(request, response) {
    let data = '';
    request.on('data', function(chunck) {
      data += chunck;
    })
    request.on('end', function() {
      console.log(data)
      response.end(data)
    })

  }).listen(3000);

})();