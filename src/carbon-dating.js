const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity !== 'string') return false;

  let sampleActivityFloat = parseFloat(sampleActivity);

  if (isNaN(sampleActivityFloat)) return false;

  if (sampleActivityFloat <= 0 || sampleActivityFloat > 15) return false;

  let k = 0.693 / HALF_LIFE_PERIOD;
  
  let sampleAge = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityFloat) / k);

  return sampleAge;

};