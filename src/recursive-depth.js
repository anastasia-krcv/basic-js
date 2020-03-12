module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let max = 0;
        for(let i = 0; i < arr.length; ++i) {
            if(Array.isArray(arr[i])) {
                let count = this.calculateDepth(arr[i]);
                if (max < count) {
                    max = count;
                }
            }
        }
        return max + 1;
    }
};