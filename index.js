const express = require('express');
const app = express();

app.get('/', (request, response) => {
  console.log('request.query ', request.query);
  response.send('<h1>Hola</h1>');
});

app.get('/data', (req, res) => {
  res.send({ name: 'Jeisson' });
});

app.get('/about', (req, res) => {
  res.send('Hecho con ♥ por TintoCode');
})

app.listen(3001, () => {
  console.log('El servidor ya esta encendido.');
});
