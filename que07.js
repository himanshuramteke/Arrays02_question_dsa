// Problem 7: Monotonic Array

function isMonotonic(nums) {
    let increasing = true;
    let decreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        increasing = false; // Not monotone increasing
      }
      if (nums[i] > nums[i - 1]) {
        decreasing = false; // Not monotone decreasing
      }
    }
  
    return increasing || decreasing;
  }
  
  const nums7 = [1, 2, 2, 3];
  console.log(isMonotonic(nums7)); // Output: true