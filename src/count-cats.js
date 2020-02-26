module.exports = function countCats( matrix ) {
  let cat = matrix.join(',').split(',').filter(i => i == '^^');
  if(cat.length != 0){
  	return cat.length;
  }else{
  	return 0;
  }
};
