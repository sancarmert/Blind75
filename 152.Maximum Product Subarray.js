var maxProduct = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    let maxProductEndingHere = nums[0];
    let minProductEndingHere = nums[0];
    let maxProduct = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            [maxProductEndingHere, minProductEndingHere] = [minProductEndingHere, maxProductEndingHere];
        }

        maxProductEndingHere = Math.max(nums[i], maxProductEndingHere * nums[i]);
        minProductEndingHere = Math.min(nums[i], minProductEndingHere * nums[i]);

        maxProduct = Math.max(maxProduct, maxProductEndingHere);
    }
    return maxProduct;
};