module.exports = function getSeason(date) {
  if(!date instanceof Date){
  	throw Error();
  }else if(date == undefined || (date - new Date()) == 0){
  	return 'Unable to determine the time of year!';
  }else if(11 == date.getMonth() || date.getMonth() <= 1){
  	return 'winter';
  }else if(2 >= date.getMonth() || date.getMonth() <= 4){
  	return 'spring';
  }else if(5 >= date.getMonth() || date.getMonth() <= 7){
  	return 'summer';
  }else if(8 >= date.getMonth() || date.getMonth() <= 10){
  	return 'autumn';
  };
};