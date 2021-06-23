function minimumSwaps(arr) {
  let swaps = 0;
  for(let i=0 ; i<arr.length ; i++) {
    while((arr[i]-1) !== i) {
      const swVl = arr[i];
      console.log(arr[i], arr[swVl-1]);
      arr[i] = arr[swVl-1];
      arr[swVl-1] = swVl;
      swaps += 1;
      console.log(arr);
    }
  }
  return swaps;
}

// console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
// console.log('');
console.log(minimumSwaps([2,3,4,1,5]));
// [2,3,4,1,5]
// [3,2,4,1,5] swap
// [4,2,3,1,5] swap
// [1,2,3,4,5] swap
console.log('');
console.log(minimumSwaps([4, 3, 1, 2]));
// console.log('');
// console.log(minimumSwaps([2, 3, 4, 1, 5]));
// console.log('');
// console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));

/*
  
*/
