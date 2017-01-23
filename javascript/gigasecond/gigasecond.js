var Gigasecond = function(dateObject){
  this.dateObject = dateObject;
};

Gigasecond.prototype.date = function(){
  var newdate = new Date();
  newdate.setTime(this.dateObject.getTime() + (1000000000*1000));
  return newdate;
};

module.exports = Gigasecond;
