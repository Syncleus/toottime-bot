var Mastodon = require('mastodon');
var Schedule = require('node-schedule');
var Moment = require('moment-timezone');

var now = Moment();

var timezone = "UTC"
var currentdate = now.tz(timezone);
var hours = currentdate.hour();
var minutes = currentdate.minute();
var currentTimeUtc = "Current " + timezone + " time is " 
                + hours + ":"  
                + minutes + ":" 
                + currentdate.second();

timezone = "Europe/Amsterdam"
currentdate = now.tz(timezone);
hours = currentdate.hour();
minutes = currentdate.minute();
var currentTimeAms = "Current time in " + timezone + " is " 
                + hours + ":"  
                + minutes + ":" 
                + currentdate.second();

timezone = "America/New_York"
currentdate = now.tz(timezone);
hours = currentdate.hour();
minutes = currentdate.minute();
var currentTimeNyc = "Current time in " + timezone + " is " 
                + hours + ":"  
                + minutes + ":" 
                + currentdate.second();

timezone = "America/Los_Angeles"
currentdate = now.tz(timezone);
hours = currentdate.hour();
minutes = currentdate.minute();
var currentTimeLa = "Current time in " + timezone + " is " 
                + hours + ":"  
                + minutes + ":" 
                + currentdate.second();

timezone = "Europe/London"
currentdate = now.tz(timezone);
hours = currentdate.hour();
minutes = currentdate.minute();
var currentTimeUk = "Current time in " + timezone + " is " 
                + hours + ":"  
                + minutes + ":" 
                + currentdate.second();

var tootInterface = new Mastodon({
  access_token: "",
  timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
  api_url: 'https://qoto.org/api/v1/', });

console.log(now);

var toots = '';

toots = currentTimeUtc + "\n\n";
toots += currentTimeAms + "\n\n";
toots += currentTimeUk + "\n\n";
toots += currentTimeNyc + "\n\n";
toots += currentTimeLa + "\n\n";
toots += "\n";

for (var i = 0; i < hours; i++) {
  toots += "TOOT ";
}
if(minutes >= 15) {
  toots += "T"
}
if(minutes >= 30) {
  toots += "O"
}
if(minutes >= 45) {
  toots += "O"
}
tootInterface.post('statuses', { status: toots });
