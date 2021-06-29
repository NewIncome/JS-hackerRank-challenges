function arrayManipulation(n, queries) {
  // Write your code here
  // [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]
  console.time('aMan');
  let maxValArr = new Array(n).fill(0);
  let w = 0, maxVal = 0, j = 0;

  while (w < queries.length) {
    let indexes = [], a, b, k;
    [a,b,k] = queries[w];
    // Give the 'j' values
    j===0 ? j = a : j += 1;

    maxValArr[j-1] += k;
    if (maxValArr[j-1] > maxVal) maxVal = maxValArr[j-1];

    // Loop conditions
    if (j===b) {
      j = 0;
      w += 1;
      console.log(maxValArr);
    }
  }
  console.timeEnd('aMan');
  return maxVal;
}

console.log(arrayManipulation(10, [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ])); // 1stTime:0.136ms passed 6/15 ;
console.log('');
// T.C.1 4 submit R:882
console.log(arrayManipulation(4, [ [2, 3, 603], [1, 1, 286], [4, 4, 882] ]));
