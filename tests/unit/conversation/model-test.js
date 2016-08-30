import { moduleForModel, test } from 'ember-qunit';

moduleForModel('conversation', 'Unit | Model | conversation', {
  // Specify the other units that are required for this test.
  needs: ['model:message', 'model:participant'],
});

test('it exists', function (assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
