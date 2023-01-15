// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// My solution

var twoSum = function(nums, target) {
    let newArray = []
    for(let i = 0; i <= nums.length; i++) {
        if(nums[i] + nums[i + 1] === target) {
            newArray.push(i)
            newArray.push(i + 1)
        }
    }
    return newArray
};

// Best Practice 

var twoSum = function (nums, target) {
    const mp = {}
 
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
    
        if (diff in mp) return [i, mp[diff]]
 
        mp[nums[i]] = i
    }
 }