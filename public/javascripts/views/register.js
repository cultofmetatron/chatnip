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
            });
            return false;
        },
        render: function() {
            this.$el.html(registerTemplate);
        }
    })
    return registerView;
})





