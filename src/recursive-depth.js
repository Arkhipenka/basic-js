module.exports = class DepthCalculator {
    calculateDepth(arr) {
    	let result = 0;
    	if(Array.isArray(arr)){
    		result++;
    		for(let i = 0;i < arr.length; i++){
    			if (Array.isArray(arr[i])) {
    				result += this.calculateDepth(arr.flat());
    				break;
    			}
    		}
    		return result;
    	}
        
        // remove line with error and write your code here
    }
};