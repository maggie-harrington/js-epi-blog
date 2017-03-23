import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
    actions: {
        postFormShow() {
            this.set('addNewPost', true);
        },

        savePost() {
            var params = {
              headline: this.get('headline') ? this.get('headline') : "",
              date: this.get('date') ? this.get('date') : "",
              blurb: this.get('blurb') ? this.get('blurb') : "",
              image: this.get('image') ? this.get('image') : "",
              author: this.get('author') ? this.get('author') : "",
              body: this.get('body') ? this.get('body') : "",
              category: this.get('category') ? this.get('category') : "",
            };
            this.set('addNewPost', false);
            this.sendAction('savePost', params);
        }
    }
});
// App.ApplicationController = Ember.ObjectController.extend({
//   categories: [
//     {name: "social"},
//     {name: "administration"},
//     {name: "jobs"},
//     {name: "languages"}
//   ]
// });
