var Isogram = function(word){
  this.word = word;
};

function cleanWord(inputWord){
  var firstClean = inputWord.replace(/[@.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var secondClean = firstClean.replace(/\s+/g,"");
  return secondClean;
};

Isogram.prototype.isIsogram = function(){
  var cleaned = cleanWord(this.word)
  var arrayOfLetters = cleaned.toLowerCase().split("");
  var letterCount = {};
  var isogram = true;
  for(var i = 0; i < arrayOfLetters.length; i++){
    if(letterCount.hasOwnProperty(arrayOfLetters[i])){
      letterCount[arrayOfLetters[i]] += 1;
      isogram = false;
    } else {
      letterCount[arrayOfLetters[i]] = 1;
    }
  }
  return isogram;
}

module.exports = Isogram;