// How many valleys does he enter and leave

function countingValleys(steps, path) {
  // Write your code here
  let hills = 0;
  let pathNum = 0;
  path.split('').forEach(stp => {
    console.log(pathNum);
    if (pathNum === 0 && stp === 'D') hills += 1;
    stp === 'U' ? pathNum += 1 : pathNum -= 1;
  });
  return hills;
}

//_/\      _
//   \    /
//    \/\/
console.log(countingValleys(8, 'UDDDUDUU'));
//_          /\_
// \  /\    /
//  \/  \/\/
console.log(countingValleys(12, 'DDUUDDUDUUUD'));

