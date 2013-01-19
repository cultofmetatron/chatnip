
/*
 * GET home page.
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
