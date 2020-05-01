const path = require('path');
const express = require('express');

const hostname = '127.0.0.1';
const app = express();
const buildPath = path.join(__dirname, '../../ui/' , 'build');
const port = process.env.PORT || 3001;

app.use(express.static(buildPath));

app.get('/path', (req, res) => {
  res.end("PATH TO build : " + buildPath);
});

app.get('*',(req, res) => { // site content
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(buildPath);
  console.log('Server is up! visit on http://' + hostname + ':' + port + '/');
});