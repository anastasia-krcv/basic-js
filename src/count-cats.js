module.exports = function countCats(matrix) {
  if(!matrix || matrix.length === 0) {
    return 0;
  }
  let newMatrix = matrix.reduce((prev, next) => prev.concat(next));
  return newMatrix.filter(item => (item == '^^')).length;
};
