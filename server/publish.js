/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish('rsvps', function () {
  return Rsvps.find();
});