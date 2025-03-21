// Create web server
var express = require('express');
var app = express();
app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});

// Create /comments route
app.get('/comments', function (req, res) {
  // Create comments array
  var comments = [
    { name: 'John', comment: 'Hello!' },
    { name: 'Mary', comment: 'Hi!' },
    { name: 'Sue', comment: 'Hey!' }
  ];
  res.json(comments);
});