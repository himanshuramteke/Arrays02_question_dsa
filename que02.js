// Problem 2: Maximum Number of Different Candies

function distributeCandies(candyType) {
    const uniqueCandies = new Set(candyType); // Create a set to store unique candy types
    return Math.min(uniqueCandies.size, candyType.length / 2);
  }
  
  const candyType1 = [1, 1, 2, 2, 3, 3];
  console.log(distributeCandies(candyType1)); // Output: 3