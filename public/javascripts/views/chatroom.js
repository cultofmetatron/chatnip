
define(['text!templates/chatroom.html'], function(chatroomTemplate) {
    var chatroomView = Backbone.View.extend({
        el:$('#chat-console'),

        render: function() {
            this.$el.html(chatroomTemplate);
            $('#error').hide();

        }

    });

    return chatroomView;

})
