const activityTracker = require('../db/activityTracker').activityTracker;

const activity = new activityTracker();
const googleController=require('../googleAPI/api');




exports.createEvent = async (req, res, next) => {
    console.log("sending to google controller");
   // googleController.createEvent(req.body.activity_date,req.body.event_summary,req.body.event_description);
    console.log("sent to google controller");
    console.log("now tryin to insert into database");
    try {
        console.log("inside activity manager in controller");
        const result = await activity.createActivity(req.params.userID, req.body.activity_date, req.body.event_summary, req.body.event_description);
        console.log("got the result back from database");
        
        console.log(result);
        res.status(201).json({
            status: "success",
            data: {
                user: result.rows
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}

exports.getEvents = async (req, res, next) => {
    try {
        const result = await activity.getEvents(req.params.userID);
        console.log(result);
        res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                activities: result.rows,
            }
        })
    }
    catch (err) {
        console.log(err);
    }
}

