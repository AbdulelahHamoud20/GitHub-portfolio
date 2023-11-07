/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Abdulelah Alanazi 
 * Email: Alanaza7@oregonstate.edu 
 */

var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');

var postData = require('./postData.json');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.get('/', function (req, res, next){
  res.render('photosPage', {
    photos: photosData,
    displayFilter: true,
    displayModal: true
  });
  res.status(200);
});


app.get('/posts/:index', function(req, res, next){
  var index = parseInt(req.params.index);
  if(index >= 0 && index <= 7){
    var arr = []
    arr.push(photosData[index]);
    //var picture = photosData[index];
    res.render('photosPage',{
      photos: arr,
      displayFilter: false,
      displayModal: false
    })
    res.status(200);
  }
  else{
    next();
  }

})
app.get('*', function (req, res) {
  res.render('404Page');
  res.status(404);
//  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
