var Isogram = function(word){
  this.word = word;
};

Isogram.prototype.isIsogram = function(){
  var wordArray = this.word.split("");
  console.log(wordArray);
}


module.exports = Isogram;