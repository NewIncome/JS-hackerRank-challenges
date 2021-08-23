// return int: the number of deletions so there are no matching adjacent letters
function alternatingCharacters(s) {
  // Write your code here
  console.time('stringCheck');
  let arrS = s.split('');
  let cnt = 0;
  let prevS = arrS[0];
  for (let i=0 ; i<(arrS.length-1) ; i++) {
    prevS === arrS[i+1] ? cnt += 1 : prevS = arrS[i+1];
  }
  console.timeEnd('stringCheck');
  return cnt;
}

// T.C.0: 
const strings = ['AAAA','BBBBB','ABABABAB','BABABA','AAABBB'];
for(const string of strings) {
  console.log(alternatingCharacters(string));
}
