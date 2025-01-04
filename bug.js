const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
//The error occurs when the server attempts to handle requests that are larger than the default request body size limit set by express.js. The default is 100kb.  This may result in unexpected behavior, including crashes or incomplete data processing.