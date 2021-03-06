Template.activities.rendered = function() {

};

Template.activities.events({
'submit .new-post':function(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const user = Meteor.user();
 
    // Insert a task into the collection
    Posts.insert({
      text: text,
      createdBy: Meteor.userId(),
      organization: Meteor.user().profile.organization,
      createdByName: user.profile.firstName,
      createdAt: new Date() // current time
    });
 
    // Clear form
    target.text.value = '';
    Router.go('/journal');
    Bert.alert( 'Success! Your post was added to your personal jounral.', 'success' );
  },
});