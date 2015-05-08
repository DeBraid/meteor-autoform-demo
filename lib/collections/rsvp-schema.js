Rsvps = new Mongo.Collection("rsvps");

Rsvps.attachSchema(new SimpleSchema({
  guests: {
    type: String,
    label: "Name of Guest(s)",
    optional: false,
    min: 5,
    max: 80    
  },
  email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
      label: "Email (recommended but optional)",
      optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      return new Date();
    }
  }
}));

Rsvps.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});