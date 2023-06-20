// Problem 6: Binary Search

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid; // Target found
      } else if (nums[mid] < target) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  
    return -1; // Target not found
  }
  
  const nums6 = [-1, 0, 3, 5, 9, 12];
  const target6 = 9;
  console.log(search(nums6, target6)); // Output: 4