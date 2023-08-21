const {google} = require('googleapis');

const {OAuth2} = google.auth;
//oauth2Client is the client that will be used to make requests later on
const oauth2Client = new OAuth2('482642282163-amhavq0td1mcff6pk5u0a8attdl5gb7b.apps.googleusercontent.com','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');
oauth2Client.setCredentials({refresh_token : '1//04zya3jkz9RgtCgYIARAAGAQSNwF-L9Ir6UtBkKV8Ou2ovP_h9fyVom5PhQONSZT3zr54Efe4xcwPBvCac7S6HMVW1xLiql4UXFc',});

const calendar = google.calendar({version : 'v3', auth : oauth2Client});

exports.createEvent = (activity_date,activitySummary,activityDescription) => {
  
    const event = {
        summary: `${activitySummary}`,
       
        description: `${activityDescription}`,
        colorId: 1,
        start: {
          dateTime: `${activity_date}`,
          timeZone: 'Bangladesh/Dhaka',
        },
        end: {
          dateTime: `${activity_date}`,
          timeZone: 'Bangladesh/Dhaka',
        },
      }

    return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        err => {
          // Check for errors and log them if they exist.
          if (err) return console.error('Error Creating Calender Event:', err)
          // Else log that the event was created.
          return console.log('Calendar event successfully created.')
        }
      )
    }