// How many valleys does he enter and leave

function countingValleys(steps, path) {
  let hills = 0;
  let pathNum = 0;
  for (let i=0; i<=steps; i++) {
    if (pathNum === 0 && path[i] === 'D') hills += 1;
    path[i] === 'U' ? pathNum += 1 : pathNum -= 1;
  }
  return hills;

  // >>>>> Solution returns 'Time limit exceeded' for TC 14-21 <<<<<
  // let hills = 0;
  // let pathNum = 0;
  // path.split('').forEach(stp => {
  //   console.log(pathNum);
  //   if (pathNum === 0 && stp === 'D') hills += 1;
  //   stp === 'U' ? pathNum += 1 : pathNum -= 1;
  // });
  // return hills;
}

//_/\      _
//   \    /
//    \/\/
console.log(countingValleys(8, 'UDDDUDUU'));
//_          /\_
// \  /\    /
//  \/  \/\/
console.log(countingValleys(12, 'DDUUDDUDUUUD'));

/*   >>>>> Fastest Loop in JavaScript? <<<<<               vvvvv
for (let i = arr.length; i > 0; i--) {} <-- for(reverse) :- 1.5ms
for (let i = 0; i < arr.length; i++) {} <-- for          :- 1.6ms
arr.forEach(v => v)                     <-- foreach      :- 2.1ms
for (const v of arr) {}                 <-- for...of     :- 11.7ms
*/
