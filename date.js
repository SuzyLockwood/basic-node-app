/* Module for various timestamps - for fun */

let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
let monthDateYear = month + 1 + '/' + day + '/' + year;
let dateTime = currentDate.toLocaleString('en-US', {
  timeZone: 'America/Los_Angeles'
});

exports.myDateTime = function() {
  console.log('The date and time is currently: ' + dateTime);
};

exports.myDate = function() {
  console.log('The date is currently: ' + monthDateYear);
};

exports.myMonth = function() {
  console.log('The month is currently: ' + (month + 1));
};

exports.myDay = function() {
  console.log('The day is currently: ' + day);
};

exports.myYear = function() {
  console.log('The year currently: ' + year);
};
