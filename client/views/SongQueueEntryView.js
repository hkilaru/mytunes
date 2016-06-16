// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  events: {
    'click': function() {
      console.log('deleted song: ', this.model);
      this.model.delete();
      //capture what was clicked
      //remove it from songQueue
    }
  },
  initialize: function() {
    // $audioElement[0].ended;
  },
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
