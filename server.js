
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-app>'));

// app.get('/*', function(req,res) {
//
//   res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
// });
app.get('*', function (req, res) {
  res.sendfile('./dist/index.html'); // load our index.html file
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
