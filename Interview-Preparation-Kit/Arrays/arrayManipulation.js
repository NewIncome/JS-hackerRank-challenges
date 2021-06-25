function arrayManipulation(n, queries) {
  // Write your code here
  //     for (let i=0 ; i<queries.length ; i++) {
  // [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]
  let maxValArr = new Array(n).fill(0);
  let w = 0;
  while (w < queries.length) {
    let indexes = [], a, b, k;
    [a,b,k] = queries[w];
    // Create the indexes to be edited
    for (let i=a ; i<=b ; i++) indexes.push(i);

    maxValArr  = new Array(...maxValArr.map((e,i) => indexes.includes(i+1) ? e+k : e));
    console.log(indexes);
    w += 1;
    console.log(`[${maxValArr}]`);
  }
}

arrayManipulation(10, [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]);
