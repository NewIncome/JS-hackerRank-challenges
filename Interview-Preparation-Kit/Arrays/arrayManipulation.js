function arrayManipulation(n, queries) {
  // Write your code here
  // [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]  =>  200
  console.time('aMan');
  let valArr = new Array(n).fill(0);
  let max = null, cur = 0;

  queries.forEach(query => {
    // console.log(query);
    valArr[query[0]-1] += query[2];
    valArr[query[1]] += -query[2];
  });
  console.log(valArr);
  valArr.forEach(val => {
    cur += val;
    if (max == null) max = val;
    if (cur > max) max = cur;
  });

  console.timeEnd('aMan');
  return max;
}

// T.C.0: 200
console.log(arrayManipulation(10, [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ])); // 1stTime:0.136ms passed 6/15 ;
// T.C.1:882
console.log(arrayManipulation(4, [ [2, 3, 603], [1, 1, 286], [4, 4, 882] ]));
// T.C.14:10
console.log(arrayManipulation(10, [[1,5,3],[4,8,7],[6,9,1]]));
// T.C.15:31
console.log(arrayManipulation(10, [[2,6,8],[3,5,7],[1,8,1],[5,9,15]]));
/*       wwhile   BDe
   TC | time(ms) time(ms)
    0    5.885    0.118
    1    0.230    0.022
   14    0.139    0.014
   15    0.157    0.009
*/

// Solution thanks to BrianDyck's explanation : [3 0 0 7 0 -2 0 0 -7 -1]

/* T.C.0
  [100 100 -100(+100) 0 -100 -100 0 0 0 0]
   T.C.1
  [286 603(-286) 0 -603(+882)] -882
*/