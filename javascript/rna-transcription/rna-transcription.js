var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(DnaString){
  DnaArray = DnaString.split("");
  var RnaString = "";
  for (var i = 0; i < DnaArray.length; i++) {
    if(DnaArray[i] == "C"){
      RnaString += "G";
    } else if (DnaArray[i] == "G"){
      RnaString += "C";
    } else if (DnaArray[i] == "A"){
      RnaString += "U";
    } else if (DnaArray[i] == "T"){
      RnaString += "A";
    }
  }
  return RnaString;
};

module.exports = DnaTranscriber;
