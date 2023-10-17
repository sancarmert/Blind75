var productExceptSelf = function(nums) {
    const n = nums.length;
    const leftProducts = new Array(n);
    const rightProducts = new Array(n);
    const result = new Array(n);

    leftProducts[0] = 1;
    rightProducts[n - 1] = 1;
    
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }
    return result;
};

const nums1 = [1, 2, 3, 4];
const nums2 = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums1)); 
console.log(productExceptSelf(nums2));
