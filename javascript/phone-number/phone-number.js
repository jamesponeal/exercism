var PhoneNumber = function(phoneNumber){
  this.phoneNumber = phoneNumber;
};

PhoneNumber.prototype.cleanNumber = function(inputNumber){
  var firstClean = inputNumber.replace(/[@.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var secondClean = firstClean.replace(/\s+/g,"");
  return secondClean;
}

PhoneNumber.prototype.number = function(){
  var number = this.cleanNumber(this.phoneNumber);
  if(number.length == 11 && number[0] == '1'){
    return number.slice(1,11);
  } else if(number.length == 11 || number.length == 9){
    return '0000000000';
  } else {
    return number;
  }
}

PhoneNumber.prototype.areaCode = function(){
  var areaCodeCleaned = this.cleanNumber(this.phoneNumber);
  return areaCodeCleaned.slice(0,3);
}

PhoneNumber.prototype.toString = function(){
  var number = this.number(this.phoneNumber);
  var newnumber = "(";
  newnumber += number.slice(0,3);
  newnumber += ") "
  newnumber += number.slice(3,6);
  newnumber += "-"
  newnumber += number.slice(6,10);
  return newnumber;
}


module.exports = PhoneNumber;