// const express = require('express');
// const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // add the CORS header
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// // Route handler for fetching data from superhero API
// app.get('/superhero-data', function(req, res) {
//   const url1 = `https://superheroapi.com/api/1992888917717157/1`;
//   fetch(url1)
//     .then(res => res.json())
//     .then(data => res.send(data))
//     .catch(err => res.status(500).send('Error fetching superhero data'));
// });

// app.listen(3000, function () {
//   console.log('Server listening on port 3000!');
// });



const url1 = `https://superheroapi.com/api/1992888917717157/1`;
fetch(url1)
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data)));