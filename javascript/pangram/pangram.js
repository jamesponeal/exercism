var Pangram = function(phrase){

  this.phrase = phrase,

  this.preparePhrase = function(inputPhrase){
    var firstClean = inputPhrase.replace(/[@.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var secondClean = firstClean.replace(/\s+/g,"");
    return secondClean.toLowerCase().split("");
  },

  this.isPangram = function(){
    var letterLibrary = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var phraseArray = this.preparePhrase(this.phrase);
    for(var i = 0; i < phraseArray.length; i++){
      if(letterLibrary.includes(phraseArray[i])){
        letterLibrary.splice(letterLibrary.indexOf(phraseArray[i]), 1)
      }
    }
    if(letterLibrary.length > 0){
      var pangram = false;
    } else {
      var pangram = true;
    }
    return pangram;
  }

};


module.exports = Pangram;
