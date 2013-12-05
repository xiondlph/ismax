App = {
  Index: {
    Collection: {},
    Model: {},
    View: {},
    Templates: {},
    Apps: {}
  }
}

// Маршрутизатор
var Route = Backbone.Router.extend({
  routes: {
    '':       'index',
    'index':  'index',
  },
  
  index: function(){
    App.Index.Apps.Slider.render();
    App.Index.Apps.Scroll.render();
    App.Index.Apps.Login.render();
    App.Index.Apps.Signup.render();
  }
});

$(document).ready(function(){
  App.Index.Apps.Slider       = new App.Index.View.Index.Slider({el: $('#slider')});
  App.Index.Apps.Scroll       = new App.Index.View.Index.Scroll({el: $('#scroll')});
  App.Index.Apps.Login        = new App.Index.View.Index.Login({obj: $('#panel .top')});
  App.Index.Apps.Signup       = new App.Index.View.Index.Signup({obj: $('#main')});

  var route = new Route();
  Backbone.history.start();
});
