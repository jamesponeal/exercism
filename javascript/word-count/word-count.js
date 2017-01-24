var Words = function(){};

Words.prototype.count = function(input){
  var hashcount = {};
  var firstClean = input.replace(/[@.,\/#!$%\^&\*;:{}=\-_`~()]/g," ");
  var secondClean = firstClean.replace(/\s{2,}/g," ");
  var input_array = secondClean.trim().split(" ");
  for(var i = 0; i < input_array.length; i++){
    if(hashcount.hasOwnProperty(input_array[i])){
      hashcount[input_array[i]] += 1;
    } else {
      hashcount[input_array[i]] = 1;
    }
  }
  return hashcount;
};

module.exports = Words;