
//the required client side dependencies

require.config({
    paths: {
               jQuery: '/javascripts/libs/jquery',
               Underscore: '/javascripts/libs/underscore',
               Backbone: '/javascripts/libs/backbone',
               text:      '/javascripts/libs/text',
               Bootstrap: '/javascripts/libs/bootstrap',
               templates: '../templates'
           },

    shim: {
              'Bootstrap': ['jQuery'],
              'Backbone' : ['jQuery', 'Underscore'],
              'Application': ['Backbone', 'Bootstrap']
          }
});

require(['Application'], function(app) {
    app.initialize();

});







