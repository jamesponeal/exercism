var Anagram = function(word){
  this.word = word;
};

Anagram.prototype.sortLetters = function(word){
  var newWord = word.toLowerCase().split("").sort().join("");
  return newWord;
};

Anagram.prototype.createSortedArray = function(wordsArray){
  var sortedWordsArray = [];
  for(var i = 0; i < wordsArray.length; i++){
    sortedWordsArray.push(this.sortLetters(wordsArray[i]));
  }
  return sortedWordsArray;
};

Anagram.prototype.compareWords = function(word, sortedWordsArray, wordsArray){
  var matchArray = [];
  for(var i = 0; i < wordsArray.length; i++){
    if(word == sortedWordsArray[i]){
      if(this.word != wordsArray[i].toLowerCase()){
        matchArray.push(wordsArray[i]);
      }
    }
  }
  return matchArray;
};

Anagram.prototype.matches = function(){
  if(Array.isArray(arguments[0])){
    var wordsArray = arguments[0];
    var sortedWordsArray = this.createSortedArray(arguments[0]);
  } else {
    var wordsArray = [];
    var sortedWordsArray = [];
    for(var i = 0; i < arguments.length; i++){
      wordsArray.push(arguments[i]);
      sortedWordsArray.push(this.sortLetters(arguments[i]));
    }
  }
  var inputWordSorted = this.sortLetters(this.word);
  var matchArray = this.compareWords(inputWordSorted, sortedWordsArray, wordsArray);
  return matchArray;
};


module.exports = Anagram;