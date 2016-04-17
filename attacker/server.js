var app = require ('express') (),
  bodyParser = require ('body-parser');

  //------------------CORS-----------------------------------------------------------/
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });
  //------------------CORS-----------------------------------------------------------/

app.use (bodyParser.json ());

app
  .post ('/stored', function (req, res) {
    console.log ('Performed stored XSS: ', req.body);
    res.sendStatus (201);
  })
  .post ('/reflected', function (req, res) {
    console.log ('Performed reflected XSS: ', req.body);
    res.sendStatus (201);
  })
  .listen (8085, function () {
    console.log ('Attacker Server listening on port 8085');
  });
