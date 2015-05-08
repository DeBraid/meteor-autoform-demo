AutoForm.addHooks('insertRsvpForm', {
	onSuccess: function () {
		console.log("running after hook for RSVP insert!");
		return Session.set('successfulRsvp', true);
	}
})

/*****************************************************************************/
/* Rsvp: Event Handlers */
/*****************************************************************************/
Template.Rsvp.events({
});

/*****************************************************************************/
/* Rsvp: Helpers */
/*****************************************************************************/
Template.Rsvp.helpers({
	isSuccessfulRsvp: function () {
		return Session.get('successfulRsvp');
	}
});

/*****************************************************************************/
/* Rsvp: Lifecycle Hooks */
/*****************************************************************************/
Template.Rsvp.created = function () {
	return Session.set('successfulRsvp', false);
};

Template.Rsvp.rendered = function () {
};

Template.Rsvp.destroyed = function () {
	return Session.set('successfulRsvp', false);
};
