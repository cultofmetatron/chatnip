//the registration view

define(['text!templates/register.html'], function(registerTemplate) {
    var registerView = Backbone.View.extend({
        el: $('#chat-console'),
        events: {
            "submit form": "register"

        },
        register: function() {
            $.post('/register', {
                username: $('input[name=username]').val(),
                password: $('input[name=password]').val()

            }, function(data) {
                console.log(data);
            }).error(function(err) {
                $('#error').text('registration failed').slideDown();
            }).success(function() {
                $('#error').hide();
                window.location.hash = 'index';

            });
            return false;
        },
        render: function() {
            this.$el.html(registerTemplate);
        }
    })
    return registerView;
})





