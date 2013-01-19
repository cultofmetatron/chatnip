//the application function that manages the main client side system

define(['views/index'],function (indexView) {
    //this is where the initialization function
    //bootstraps the system!
    var init = function() {
        indexView.render();

    }

    return {
        initialize: init

    };

});

