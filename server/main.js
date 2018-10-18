import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
    //uncomment which service you are using

    /* SES */
    process.env.MAIL_URL = `smtps://${encodeURIComponent(Meteor.settings.AWS.SESUser)}:${encodeURIComponent(Meteor.settings.AWS.SESPASSWORD)}@email-smtp.${Meteor.settings.AWS.AWSRegion}.amazonaws.com:465`;

    /* Zoho */
    // process.env.MAIL_URL = `smtps://${encodeURIComponent(Meteor.settings.zoho.userName)}:${encodeURIComponent(Meteor.settings.zoho.secret)}@smtp.zoho.com:465`;
    // TODO: add others mailgun etc

});

Meteor.methods({
    'sendEmail' : () => {
        // Meteor.defer(function(){
            console.log( 'Email Sent Start' );
            Email.send({
                to: 'to@developer.com',
                from: 'lazy@developer.com',
                subject: 'test',
                text: 'test is always best'
            });
            console.log( 'Email Sent end' );
        // });
    }
});


