import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('guest', { path: '/' }, function() {
    this.route('welcome', { path: '/' });
    this.route('register');
    this.route('login');
  });
});

export default Router;
