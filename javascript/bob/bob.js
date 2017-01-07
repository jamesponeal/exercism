//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if(input.match(/[A-Za-z0-9?!]/) == null){
    var string = "Fine. Be that way!"
  } else if(input.match(/[A-Za-z]/) == null && input.includes('?') == false){
    var string = "Whatever.";
  } else if (input == input.toUpperCase() && input.match(/[A-Za-z]/) != null){
    var string = "Whoa, chill out!";
  } else if (input[input.length-1] == '?'){
    var string = "Sure.";
  } else {
    var string = "Whatever.";
  }
  return string;
};

module.exports = Bob;
