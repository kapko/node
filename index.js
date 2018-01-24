const express = require('express'),
  app = express(),
  server = require('http').createServer(app);

app.get('/', (req, res)=>{
  res.send('Hello world');
});


server.listen('3000', (req, res)=>{
  console.log('SERVER = ', server.address());
})