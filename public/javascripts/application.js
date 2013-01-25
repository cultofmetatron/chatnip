//the application function that manages the main client side system

define(['router'],function (router) {
    //this is where the initialization function
    //bootstraps the system!
    var init = function() {
        checkLogin(runApplication)

    };

    var checkLogin = function(callback) {
        $.ajax('/account/authenticated', {
            method:"GET",
            success:function() {
                return callback(true);
            },
            error: function(data) {
                return callback(false);
            }
        });

    };

    var runApplication = function(authenticated) {
        if(!authenticated) {
            window.location.hash = 'login';
        } else {
            window.location.hash = 'chatroom';
        }
        Backbone.history.start();
    }

    return {
        initialize: init

    };

});

