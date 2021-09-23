var twoSum = function(nums, target){
    for(var i=0; i < nums.length; i++){
        for (var j=i+1; j < nums.length; j++){
            temp = nums[i] + nums[j];
            if(temp == target){
                return [i,j]
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([15, 7, 11, 2], 9));


