module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
      throw 'Error';
    }

    arr.filter((item, index) =>
      {
        if(item === '--discard-next') {
          index + 1 < arr.length ? arr.splice(index, 2) : arr.splice(index, 1);
          index--;
        }
        if(item === '--discard-prev') {
          arr.splice(index-1, 2);
        }
        if(item === '--double-next') {
          arr.splice(index, 1, item+1);
        }
        if(item === '--double-prev') {
          arr.splice(index, 1, item);
        }
      }
    );
    return arr;

    // if (arr.includes('--discard-next')) {
    //   arr.splice(arr.indexOf('--discard-next'), 2);
    //   return arr;
    // }
    // if (arr.includes('--discard-prev')) {
    //   arr.splice(arr.indexOf('--discard-prev')-1, 2);
    //   return arr;
    // }
    // if (arr.includes('--double-next')) {
    //   arr.splice(arr.indexOf('--double-next'), 1, arr.indexOf('--double-next') + 1);
    //   return arr;
    // }
    // if (arr.includes('--double-prev')) {
    //   arr.splice(arr.indexOf('--double-prev'), 1, arr.indexOf('--double-prev'));
    //   return arr;
    // }
    // return arr;
};
