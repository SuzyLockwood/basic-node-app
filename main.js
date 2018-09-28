const greetings = require('./greeting');
const timestamp = require('./date');

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

// "Hola"
greetings.greetingSpanish();

// "Hallo"
greetings.greetingIcelandic();

/* by default, the browser's time zone and date like this:
'Thu Sep 27 2018 20:34:22 GMT-0700 (Pacific Daylight Time)'
*/
timestamp.myDateTime();
