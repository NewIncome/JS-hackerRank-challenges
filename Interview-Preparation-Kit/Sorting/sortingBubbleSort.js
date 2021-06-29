function countSwaps(a) {
  // Write your code here
  let swaps = 0;
  for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
          // Swap adjacent elements if they are in decreasing order
          if (a[j] > a[j+1]) {
              [a[j], a[j+1]] = [a[j+1], a[j]];
              swaps += 1;
          }
      }
  }
  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length-1]}`);
  console.log(a);
  console.log('');
}
// T.C.0
countSwaps([1, 2, 3]);
// T.C.1
countSwaps([ 3, 2, 1 ]);
// T.C.2
countSwaps([ 4, 2, 3, 1 ]);
