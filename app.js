const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the port testing app!');
})

app.listen(3000, () => {
  console.log('Portland listening on port 3000!');
})
