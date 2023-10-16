var containsDuplicate = function(nums){
    var numCounts ={};

    for (var i = 0; i < nums.length; i++){
        var num = nums[i];

        if(numCounts[num]){
            return true;
        }
        numCounts[num] = 1;
    }
    return false;
};