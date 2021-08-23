function alternatingCharacters(s) {
  // Write your code here
  let arrS = s.split('');
  let cnt = 0;
  for (let i=0 ; i<(arrS.length-1) ; i++) {
    // console.log(arrS[i], ',', arrS[i+1], ',', arrS[i-1] === arrS[i]);
    if (arrS[i] === arrS[i+1]) {
      arrS.splice((i+1),1);
      cnt += 1;
      i = i - 1;
    }
  }
  return cnt;
  // return // int: the number of deletions so there are no matching adjacent letters
}

// T.C.0: 
const strings = ['AAAA','BBBBB','ABABABAB','BABABA','AAABBB'];
for(const string of strings) {
  console.log(alternatingCharacters(string));
}
