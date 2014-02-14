App = {
  Demo: {
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
    App.Demo.Apps.List.render();
    App.Demo.Apps.Form.render();
  }
});

$(document).ready(function(){
  App.Demo.Apps.List = new App.Demo.View.Index.List({obj: $('#main')});
  App.Demo.Apps.Form = new App.Demo.View.Index.Form({obj: $('#main')});

  var route = new Route();
  Backbone.history.start();
});
