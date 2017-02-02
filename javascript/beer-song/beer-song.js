var BeerSong = function(){}

BeerSong.prototype.sing = function(start, end){
  end = end || 0;
  var wholeSong = ""
  for (var i = start; i >= end; i--){
    wholeSong += this.verse(i);
    if (i > end){
      wholeSong += "\n";
    }
  }
  return wholeSong;
}

BeerSong.prototype.verse = function(numberBottles){
  var oneVerse = "";
  if(numberBottles > 0){
    oneVerse += numberBottles;
  } else {
    oneVerse += "No more";
  }
  if(numberBottles == 1){
    oneVerse += " bottle of beer on the wall, ";
  } else {
    oneVerse += " bottles of beer on the wall, ";
  }
  if(numberBottles > 0){
    oneVerse += numberBottles;
  } else {
    oneVerse += "no more";
  }
  if(numberBottles == 1){
    oneVerse += " bottle of beer.\n";
  } else {
    oneVerse += " bottles of beer.\n";
  }
  if(numberBottles == 0){
    oneVerse += "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
  } else {
    if(numberBottles-1 == 0){
      oneVerse += "Take it down and pass it around, no more";
    } else {
      oneVerse += "Take one down and pass it around, ";
      oneVerse += numberBottles-1;
    }
    if(numberBottles-1 == 1){
      oneVerse += " bottle of beer on the wall.\n";
    } else {
      oneVerse += " bottles of beer on the wall.\n";
    }
  }
  return oneVerse;
}


module.exports = BeerSong;