import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  date: DS.attr(),
  blurb: DS.attr(),
  image: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  category: DS.attr()
});
