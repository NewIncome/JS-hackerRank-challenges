function findMedian(arr) {
  return arr.sort((a, b) => a - b)[Math.floor(arr.length/2)];
}

