var express = require('express');
var app = express();
app.use(express.static('./'));

app.listen(9000, function () {
   console.log('markPuzzle displaying on port 9000! http://localhost:9000');
});
