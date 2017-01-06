//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if(input.includes('!')){
    var string = "Whoa, chill out!"
  } else if(input.includes('?')){
    var string = "Sure."
  } else {
    var string = "Whatever.";
  }

  return string;
};

module.exports = Bob;
