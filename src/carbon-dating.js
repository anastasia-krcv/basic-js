const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    sampleActivity <= 0 
    || sampleActivity >= 15 
    || typeof sampleActivity !== 'string' 
    || isNaN(parseFloat(sampleActivity))
    ) {
    return false;
  }
  let years = Math.log(MODERN_ACTIVITY /  parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(years);
};
