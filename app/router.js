import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('guest', { path: '/' }, function() {
    this.route('welcome', { path: '/' });
    this.route('register', function() {
      this.route('user-select');
    });
    this.route('login');
  });
  this.route('profile', function() {
    this.route('view', function() {
      this.route('sitter');
      this.route('child');
    });
    this.route('edit', function() {
      this.route('parent');
      this.route('sitter');
      this.route('child');
    });
  });
  this.route('grid', function() {
    this.route('parent-sitter', { path: '/sitters' });
    this.route('parent-parent');
    this.route('parent-choices');
  });
});

export default Router;
