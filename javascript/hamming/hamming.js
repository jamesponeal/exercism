var Hamming = function(){};

Hamming.prototype.compute = function(string1, string2){
  var count = 0;
  array1 = string1.split("");
  array2 = string2.split("");
  if(array1.length == array2.length){
    for (var i = 0; i < array1.length; i++) {
      if(array1[i] != array2[i]){
        count += 1;
      }
    }
  } else {
    throw new Error('DNA strands must be of equal length.')
  }
  return count;
}

module.exports = Hamming;
