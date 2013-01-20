
define(['text!templates/index.html'], function(indexTemplate) {
    var indexView = Backbone.View.extend({
        el:$('#chat-console'),
        render: function() {
            this.$el.html(indexTemplate);
        }
    })
    return indexView;
});


