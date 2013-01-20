
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();
var MemoryStore = require('connect').session.MemoryStore;

//for the mongodb connection
var mongoose = require('mongoose');
var User = require('./models/User')(mongoose);


var io = require('socket.io').listen(app);
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({
      secret:'fizz buzz is the best buzz',
      store: new MemoryStore()
  }))
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  mongoose.connect('mongodb://localhost/nodebackbone');
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


io.sockets.on('connection', function(socket) {
    //the main connnection loop for maintaining persistence


});



// Routes

app.get('/', routes.index);
app.get('/account/authenticated', routes.account_authenticated);

//registration
app.post('/register', function(req, res) {
    var username = req.param('username', '');
    var password = req.param('password', null);

    if (username == null || password == null) {
        res.send(400);
        return;
    }

    User.register(username, password);
    res.send(200);


});
//login
app.post('/login', function(req, res) {
    console.log('login request');
    var username = req.param('username', null);
    var password = req.param('password', null);
    if ( null == username || username.length < 1 ||
         null == password || password.length < 1 ) {
             res.send(400);
             return;
    }
    User.login(username, password, function(success) {
        if ( !success ) {
          res.send(401);
          return;
        }
        console.log('login was successful');
        req.session.loggedIn = true;
        res.send(200);
    });
});


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});




