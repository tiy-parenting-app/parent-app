import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  careDetails: DS.attr(),

  profile: DS.belongsTo('profile'),
});
