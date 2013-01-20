// the client side router system



define(['views/index', 'views/register', 'views/login'],
    function(IndexView, RegisterView, LoginView) {
        var SocialRouter = Backbone.Router.extend({
            currentView: null,

            routes: {
                'index':'index',
                'login':'login',
                'register':'register',
            },

            changeView:function(view) {
                if (this.currentview != null) {
                    this.currentview.undelegateEvents();
                }
                this.currentview = view;
                this.currentview.render();

            },

            index:function() {
                console.log(IndexView);
                this.changeView(new IndexView());
            },

            login:function() {
                this.changeView(new LoginView());
            },

            register:function() {
                this.changeView(new RegisterView());
            }

        });


    return new SocialRouter();

});
