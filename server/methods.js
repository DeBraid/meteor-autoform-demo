/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
	'submitRsvp': function (rsvp) {
		console.log('new RSVP:', rsvp);
		Rsvps.insert(rsvp);
	}
});
