'use strict';

require ('./mongoose') ();

var express = require ('express'),
  bodyParser = require ('body-parser'),
  cookieParser = require ('cookie-parser'),
  serveStatic = require ('serve-static'),
  session = require ('express-session'),
  commentModel = require ('mongoose').model ('comments'),
  app = express (),
  counter = 1;

  //<script>$.ajax({type: 'POST', data: JSON.stringify({userInfo: document.cookie}), contentType: 'application/json', url: 'http://localhost:8085/'});</script>

//------------------CORS-----------------------------------------------------------/
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//------------------CORS-----------------------------------------------------------/

app
  .use (bodyParser.json ())
  .use (bodyParser.urlencoded ({
    extended: true
  }))
  .use (cookieParser ())
  .use (serveStatic (__dirname))
  .set ('views', __dirname)
  .set ('view engine', 'ejs');

app
  .get ('/', function (req, res) {
    if (!req.cookies.counter) { res.cookie ('counter', counter++); }

    commentModel.find ({}, {comment: 1}, function (err, comments) {
      if (err) {return (res.sendStatus (500));}

      comments = comments.slice (comments.length-5, comments.length);
      return (res.render ('index', {
        a: comments [0].comment || '',
        b: comments [1].comment || '',
        c: comments [2].comment || '',
        d: comments [3].comment || '',
        e: comments [4].comment || '',
      }));
    });
  })
  .post ('/comment', function (req, res) {
    if (!req.body.comment) { return (res.sendStatus (204)); }
    var comment = new commentModel (req.body);

    comment.save (function (err) {
      if (err) {return (res.sendStatus (500));}
      return (res.sendStatus (201));
    });
  })
  .listen (8080, function () {
    console.log ('Web Server listening on port 8080');
  });
