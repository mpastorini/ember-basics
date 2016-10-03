import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard-home', {path: 'contactos'});
  this.route('contacts', function() {
    this.route('datafast', {path: 'proyecto'});
  });
});

export default Router;