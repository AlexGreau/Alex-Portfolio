const path = require('path');
const express = require('express');

const hostname = '127.0.0.1';
const app = express();
const buildPath = path.join(__dirname, '../../ui/' , 'build');
const port = process.env.PORT || 3000;

app.use(express.static(buildPath));

// CORS Definition
app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// building log
app.listen(port, () => {
  console.log(buildPath);
  console.log('Server is up! visit on http://' + hostname + ':' + port + '/');
});

// debug route 
app.get('/path', (req, res) => {
  res.end("PATH TO build : " + buildPath);
});



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  HOME 
// test route
app.get('/home/name',(req, res)=> {
  res.json({name : "Alexandre Greau"});
});


// Default route
app.get('/home',(req, res) => { // site content
  res.sendFile(path.join(buildPath, 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});