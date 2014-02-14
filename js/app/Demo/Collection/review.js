App.Demo.Collection.Review = Backbone.Collection.extend({
  model: App.Demo.Model.Review,
  url: 'http://e-ismax.ru/review/list/',
  parse: function(data, options){
    return data.reviews;
  }
});