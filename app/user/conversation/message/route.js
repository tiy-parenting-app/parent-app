import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.startMessages(model);

    return this._super(...arguments);
  },
});
