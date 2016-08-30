import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  src: 'http://placekitten.com/400/400',

  didReceiveAttrs() {
    const reader = new FileReader();
    const file = this.get('file');

    reader.onload = (e) => {
      this.set('src', e.target.result);
    };

    reader.readAsDataURL(file);
  },
});
