import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        headline: this.get('headline'),
        date: this.get('date'),
        blurb: this.get('blurb'),
        image: this.get('image'),
        author: this.get('author'),
        body: this.get('body'),
        // category: this.get('category'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
