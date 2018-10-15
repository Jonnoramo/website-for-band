//string functions

//add two strings
var string3 = "Monkees " + "biography";
console.log(string3);
var profile = "A tribute to The Monkees";
console.log(profile.toLowerCase());
console.log(profile.toUpperCase());
//split a string into an array of words
var words = profile.split(" ");
console.log(words);
console.log(profile.replace("originally ","originally-"));
//search for a word, return its position in string
console.log(profile.search("first"));
//extract string at position to end of string
var newProfile = profile.slice(4);
console.log(newProfile);
//extract string at position to new position
var newProfile = profile.slice(12,16);
console.log(newProfile);
