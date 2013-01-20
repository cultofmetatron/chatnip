
/*
 * all the routes
 */


exports.index = function(req, res){
  res.render('index', { title: 'Chatnip' })
};


exports.account_authenticated = function(req, res){
  //res.render('authenticated', { title: 'Chatnip' })
  if (req.session.loggedIn) {
      res.send(200);
  } else {
      res.send(401);
  }
};

// the registration page - POST
/*
exports.register = function(req, res) {
    var username = req.param('username', '');
    var password = req.param('password', null);

    if (username == null || password == null) {
        res.send(400);
        return;
    }

    User.register(username, password);
    res.send(200);


}
*/
//login
/*
exports.login = function(req, res) {
    console.log("login requested");
    var username = req.param('username', null);
    var password = req.param('password', null);

    if (username == null || username < 1  ||
        password == null || password.length < 1 ) {

        res.send(400);
        return;
    }
    User.login(username, password, function(success) {
        if(!success) {
            res.send(401);
            return;
        }
        console.log('login was successful');
        res.send(200);
    });

}
*/





