module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) != '[object Date]') {
    throw 'Error';
  };
  let month = date.getMonth() % 11;
  let season = (month >= 8) ? 'autumn'
  : (month >= 5) ? 'summer'
  : (month >= 2) ? 'spring'
  : (month >= 0) ? 'winter' 
  : '';
  return season;
};
