import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('guest', {
    path: '/',
  }, function() {
    this.route('welcome', {
      path: '/',
    });
    this.route('register', function() {
      this.route('user-select');
    });
    this.route('login');
  });

  this.route('user', function() {
    this.route('profile', function() {
      this.route('me');
      this.route('edit');
    });

    this.route('parent', function() {
      this.route('view', {
        path: '/:profile_id',
      });
    });

    this.route('sitter', function() {
      this.route('view', {
        path: '/:profile_id',
      });
    });

    this.route('connection');
    this.route('conversation', function() {
      this.route('message', {
        path: '/:conversation_id',
      });
      this.route('start', {
        path: '/start/:user_id',
      });
    });
  });
});

export default Router;
