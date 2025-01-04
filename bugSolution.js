const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '50mb' })); // Increased limit to 50mb
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Increased limit to 50mb

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Request received');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});