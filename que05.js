// Problem 5: Maximum Product of Three Numbers

function maximumProduct(nums) {
    nums.sort((a, b) => a - b);
  
    const n = nums.length;
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // Product of three largest numbers
    const product2 = nums[0] * nums[1] * nums[n - 1]; // Product of two smallest numbers and the largest number
  
    return Math.max(product1, product2);
  }
  
  const nums5 = [1, 2, 3];
  console.log(maximumProduct(nums5)); // Output: 6