/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. Example 2:
Input: nums = [3,2,4], target = 6 Output: [1,2] Example 3:
Input: nums = [3,3], target = 6 Output: [0,1]
Constraints:
2 <= nums.length <= 104 -109 <= nums[i] <= 109 -109 <= target <= 109 Only one valid answer exists.
*/
const target = (arr, tar) => {
  let sum = arr[0];
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    let a = arr[i + 1];

    if (sum + a == tar) {
      let x = arr.indexOf(sum);
      let b = arr.indexOf(a);
      result = [x, b];

      //   if (sum == a) {
      //     result = [x, b];
      //   }
    } else {
      sum = arr[i + 1];
    }
  }
  return result;
};

let nums = [2, 7, 11, 15];
let tar = 9;
let num2 = [3, 2, 4];
let tar2 = 6;
let num3 = [3, 1, 2, 5];
let tar3 = 8;
let num4 = [3, 2, 3];
let tar4 = 6;

console.log(target(nums, tar));
console.log(target(num2, tar2));
console.log(target(num3, tar3));
console.log(target(num4, tar4));
