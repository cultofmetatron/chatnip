
define(['text!templates/login.html'], function(loginTemplate) {
    var loginView = Backbone.View.extend({
        el:$('#chat-console'),
        events: {
            'submit form': 'login'
        },
        login: function() {
            $.post('/login', {
                username: $('input[name=username]').val(),
                password: $('input[name=password]').val()
            }, function(data) {
                console.log(data);
            }).error( function() {
                $('#error').text('unable to log in');
                $('#error').slideDown();
            });
            return false;
        },
        render: function() {
            this.$el.html(loginTemplate);
            $("#error").hide();
        }

    });
    return loginView
});

