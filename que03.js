// Problem 3: Longest Harmonious Subsequence

function findLHS(nums) {
    const frequency = new Map();
    let longestSubsequence = 0;
  
    // Count the frequency of each number in the array
    for (const num of nums) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
  
    // Iterate through the numbers and check if there is a harmonious subsequence
    for (const [num, count] of frequency.entries()) {
      if (frequency.has(num + 1)) {
        const subsequenceLength = count + frequency.get(num + 1);
        longestSubsequence = Math.max(longestSubsequence, subsequenceLength);
      }
    }
  
    return longestSubsequence;
  }
  
  const nums3 = [1, 3, 2, 2, 5, 2, 3, 7];
  console.log(findLHS(nums3)); // Output: 5
  
  