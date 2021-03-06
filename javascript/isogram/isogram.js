// var Isogram = function(word){
//   this.word = word;
// };

// function prepareWord(inputWord){
//   var firstClean = inputWord.replace(/[@.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
//   var secondClean = firstClean.replace(/\s+/g,"");
//   return secondClean.toLowerCase().split("");
// };

// Isogram.prototype.isIsogram = function(){
//   var arrayOfLetters = prepareWord(this.word);
//   var letterCount = {};
//   var isogram = true;
//   for(var i = 0; i < arrayOfLetters.length; i++){
//     if(letterCount.hasOwnProperty(arrayOfLetters[i])){
//       letterCount[arrayOfLetters[i]] += 1;
//       isogram = false;
//     } else {
//       letterCount[arrayOfLetters[i]] = 1;
//     }
//   }
//   return isogram;
// }



var Isogram = function(word){
  this.word = word,

  this.prepareWord = function (inputWord){
    var firstClean = inputWord.replace(/[@.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var secondClean = firstClean.replace(/\s+/g,"");
    return secondClean.toLowerCase().split("");
  },

  this.isIsogram = function(){
    var arrayOfLetters = this.prepareWord(this.word);
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
}


module.exports = Isogram;