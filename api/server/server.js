const path = require('path');
const express = require('express');

const hostname = '127.0.0.1';
const app = express();
const publicPath = path.join(__dirname, '../../ui/', 'public');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
}); 

app.listen(port, () => {
  console.log('Server is up! visit on http://' + hostname + ':' + port + '/');
});