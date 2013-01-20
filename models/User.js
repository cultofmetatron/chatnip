/* a quick and dirty user model!! */

module.exports = function(mongoose) {
    //used for encryting the password
    var crypto = require('crypto');

    var UserSchema = new mongoose.Schema({
        username: {type:String, unique:true},
        password: {type:String},
    })

    var User = mongoose.model('user', UserSchema);

    //echo to console success or failure
    var registerCallback = function(err) {
        if (err) {
            return console.log(err);

        }
        return console.log('User created');
    }

    var register = function(username, password) {
        var shaSum = crypto.createHash('sha256');

        shaSum.update(password);
        console.log('Registering ' + username);

        var user = new User({
            username:username,
            password:shaSum.digest('hex')
        })

        user.save(registerCallback);
        console.log("save command was set!");

    }

    var login = function(username, password, callback) {
        var shaSum = crypto.createHash('sha256');
        shaSum.update(password);
        console.log('logging in ' + username + " with password " + password);
        User.findOne({
            username: username,
            password: shaSum.digest('hex')

        }, function(err, doc) {
            callback(null != doc);
        })

    }

    //return the module exports
    return {
        register: register,
        login: login,
        User: User

    }


}

