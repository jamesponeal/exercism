var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  if (this.year % 400 == 0){
    var leap = true;
  } else if (this.year % 4 == 0 && this.year % 100 == 0) {
    var leap = false;
  } else if (this.year % 4 == 0) {
    var leap = true;
  } else {
    var leap = false;
  }
  return leap;
};

module.exports = Year;
