var express =require('express');
var app = express();

var randomStuff = require('./random');

app.use(express.static(__dirname + '/public'));





app.get('/randomStuff', function(req, res){

  res.send(randomStuff);
});


app.get('/randomStuff/random-quote', function(req, res){
  res.send(randomStuff[Math.floor(Math.random() * randomStuff.length)]);
});

var favFood= [
  'Pizza',
  'Spaghetti',
  'Chicken',
  'Steak'

];


app.get('/food', function(rep, res){
  res.send(favFood);
});

var picture =
  {name: 'Ron Swanson'};


app.get('/swanson', function(rep, res){
  res.send(picture);
});


var server = app.listen(3000, function (){
  var port = server.address().port;
  console.log('example app listening at http://localhost:%s', port);

});
