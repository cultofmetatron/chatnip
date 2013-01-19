// the client side router system



define(['views/index', 'views/register', 'views/login']
    function(IndexView, RegisterView, LoginView) {
        var SocialRouter = BAckbone.Router.extend({
            currentview: null,

            routes: {
                'index':'index',
                'login':'login',
                'register':'register',
            },

            changeView:function(view) {
                if (this.currentview != null) {
                    this.currentview.render();
                }
                this.currentview = view;
                this.currentview.render();

            },

            index:function() {
                this.changeView(new IndexView());
            },

            login:function() {
                this.changeView(new LoginView());
            },

            register:function() {
                this.changeView(new RegisterView());
            }

        })


    return new SocialRouter();

});
