/*
4) Add two more functions, greetingSpanish and
greetingIcelandic, in greeting.js.
5) Utilize the two functions in main.js just
like greetingEnglish and greetingJapanese.
6) Create another Node module and import it into main.js.
Your Node module should have at least two functions
within it. Then, call a function from your Node module
in main.js.
*/

exports.greetingEnglish = function() {
  console.log('Hello');
};

exports.greetingJapanese = function() {
  console.log('Konichiwa');
};

exports.greetingSpanish = function() {
  console.log('Hola');
};

exports.greetingIcelandic = function() {
  console.log('Hallo');
};
