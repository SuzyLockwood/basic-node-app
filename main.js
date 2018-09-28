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

// current month/day/year and time in US Timezone
timestamp.myDateTime();
