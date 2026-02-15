const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // ВАЖНО: Текст должен быть точно таким, как в тесте
  res.send('CI/CD работает');
});

module.exports = app;