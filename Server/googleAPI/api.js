//index.js code for integrating Google Calendar

const express = require('express');
const { google } = require('googleapis');

const app = express();

const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDSssfSC0EOHQog\nvwILnCCWWJIsw6+gfmL/cNRFTYjp7bld19iL4PwviBb1y3I6HcIH/A7kA6AcXF18\n4pg8ezskYPbnH3kUma8Ry9qGdgwrYKYj5OVt1+gSlvdjEnE75MCcFv4/LucGQ5hP\nHOtQzVTiZUN5KqQP7gFbFlGWyQFTXtlxa0WzpVmlcvgc5uy63HWAzAy4eQ8AgDeZ\n5lDJhIpbEnuUS3rFE0OcQmpRh1tGt4VZAVDGFYSnhl5xmLYEy9DdmdXFOhNJKPYi\n/qY2qXUE+W2alrgUc0hv5MtsuHKyvHFLTwMvpnJipe2y/+wDfvrx/JUW9W0sZrIW\nWj8+gf0JAgMBAAECggEAR3hSdKrRne52zYXNNU/389fGeb3FOM02WoyUzI9Q5nz3\neGArucMO+DaTBzxEGneWpiu3h1u9d3FTWvXoCvgIJz5m8h5IbZb1/jTmgt7PIPWv\nVZSiyIBI3elssCQE2fqt5SSdiKQpxIOwSgG2xpln9kXAPf0bWrXyqsmm0l2LgBIa\nPd4vpRWULTIG6WyYArQCjlqYF3Ha6eorp1UUPyciiXT7gQ0tYIiTL4oG0QAwNqVi\np4VCAgSfo/B01grX9/p8vdpZ8fpshp4OGrCEa4p+P1vNsIGqyAuN30sl6QGhDEA6\nCY0YnLhUE/Ggx2Jdq0ELIBJDs3M/4woh7mxupbjy2wKBgQDyfp91SeUnEU/aKIgF\nBl3yfwMhvOXLWsjYg7PI3SRNb1DbIVDl15dEE/bZ8+7fg1obQ96Ed+e03kzS0IB7\nS1aTNAwBvjvUM6xNuSV0eQtKYgrw0X9sA7xG7z5kQEM8Ba5JIaqJF8eIQy6leJJ1\n3hXjphPMo4AuczdzuTh6M4JMswKBgQDebtI48xiYTK4Kkv5qbBbDg4fWZd8jG0jz\nxwwXMYGP78Zt45bAvJy8HMPIqmTTx5WSsxYf7G0j9xRIfiGBUtSZlSK2H3uZw5Ax\nFEAwhm4HDfsl/mkPpUreWMnD8r2cusdjt/4ORhWAV5vBblJLmxBndjmdSaOmQf8o\n+/bDcj3lUwKBgHQg0Ypgxf3Mm5oVGPaXEvyjeMN6a+3T3yVZBQsnZFA1A9q8/Lnl\nYgp3KRs9Z2Lgy5ENEo4Lwgnq/41hznW9IYvDPBDFom9AA78A8H/zy8VmaGjlWwlG\nTK8HubBW2hvveISLO9kFa0fFLJyPvkv1/DOWABtbHXKhOKgRxos3CapjAoGBAL/c\nFUZ8IR3VHlYOnpaLL0NrY7LB4it08IMdkMc8s4XFC4JjyffreMIliZa/qwKlZ9XG\n1XGpzCY2i+9PpHTZTno/ElbHZySlc+1xi0CP474ACD6oaFTPfXm2WirDaVwUG8Je\nxSvotckjSD0bfK6sTQUBDAcoqpjQ2leuphXFp6/zAoGAIRQr4qdfxyeCdkyundgn\nDeelDvGh7hMXkuAXWG5vFwR2urBZ+I3d5pS7msgvM6pr4Vj/wDfKIBwyM9o1sykN\nOHELKjFtj0uAHUSVyhrdQs6Xsi1TWlp0zgezxA5xqVA6F+Ati2OQ6hf8eulG0CfF\nBE3lmOwVnqDMx2nczyuXd3E=\n-----END PRIVATE KEY-----\n"

const GOOGLE_CLIENT_EMAIL = "beyondtheseas@beyondtheseas.iam.gserviceaccount.com"
const GOOGLE_PROJECT_NUMBER = "769124973699"
const GOOGLE_CALENDAR_ID = "84fe40b614d08a6a3c5dbb301c6ed112d6d8d333f744c0bb144daab686d352ea@group.calendar.google.com"


const jwtClient = new google.auth.JWT(
	GOOGLE_CLIENT_EMAIL,
	null,
	GOOGLE_PRIVATE_KEY,
	SCOPES
);

const calendar = google.calendar({
	version: 'v3',
	project: GOOGLE_PROJECT_NUMBER,
	auth: jwtClient
});

exports.createEvent = (req, res) => {
  console.log("inside create event in google chal");
  var event = {
    'summary': req.body.event_summary,
    'location': 'Cumilla',
    'description': 'Discuss career opportunities',
    'start': {
      'dateTime': req.body.activity_date,
      'timeZone': 'Asia/Dhaka',
    },
    'end': {
      'dateTime': req.body.activity_date,
      'timeZone': 'Asia/Dhaka',
    },
    'attendees': [],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10},
      ],
    },
  };
  console.log("event created");
    
  const auth = new google.auth.GoogleAuth({
    keyFile: '/home/kayanika/Downloads/beyondtheseas-15f9dc4de355.json',
    scopes: 'https://www.googleapis.com/auth/calendar',
  });
  console.log("auth created");
  auth.getClient().then(a=>{
    calendar.events.insert({
      auth:a,
      calendarId: GOOGLE_CALENDAR_ID,
      resource: event,
    }, function(err, event) {
      if (err) {
        console.log('There was an error contacting the Calendar service: ' + err);
        return;
      }
      console.log('Event created: %s', event.data);
      res.jsonp("Event successfully created!");
    });
  })
}