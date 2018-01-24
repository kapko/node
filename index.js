const express = require('express'),
  app = express();

app.get('/', (req, res)=>{
  res.send('Hello world');
});


app.listen('3000', (req, res)=>{
  console.log('port is 3000');
})