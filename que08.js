// Problem 8: Minimum Difference Between Largest and Smallest Value in Three Moves

function minDifference(nums) {
    const n = nums.length;
    if (n <= 4) {
      return 0; // If there are 4 or fewer elements, the difference can be reduced to 0
    }
  
    nums.sort((a, b) => a - b);
  
    // Calculate the minimum difference by comparing four possible scenarios
    const scenario1 = nums[n - 1] - nums[3];
    const scenario2 = nums[n - 2] - nums[2];
    const scenario3 = nums[n - 3] - nums[1];
    const scenario4 = nums[n - 4] - nums[0];
  
    return Math.min(scenario1, scenario2, scenario3, scenario4);
  }
  
  const nums8 = [1];
  const k = 0;
  console.log(minDifference(nums8)); // Output: 0
  