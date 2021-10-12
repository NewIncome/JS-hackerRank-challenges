// return the number of unordered anagrammatic pairs of substrings
function sherlockAndAnagrams(s) {
    // Write your code here
  // loop over array
  // 'kkkk'
  // 0-1 0-2 0-3   01-12 01-23   123-123
  //     1-2 1-3   12-23
  //         2-3
  let anagramCnt = 0;
  for(let i=0 ; i<s.length ; i++) { // start
    for(let j=1 ; j<s.length ; j++) { // increment sCheck size
      let curr = s.slice(i,i+j);
      for(let k=i+1 ; k<=(s.length-j) ; k++) { // end
        let anagramMaybe = s.slice(k,k+j).split('').reverse().join('');
        // console.log(`ijk:${i}${j}${k}, curr:${curr}, rruc:${anagramMaybe} ; s:${s} ${s.length}`);
        if(curr == anagramMaybe) anagramCnt += 1;
      }
    }
  }
  // console.log('');
  return anagramCnt;
}

// T.C.0-example1 : 4
console.log(sherlockAndAnagrams('abba'));
// T.C.0-example2 : 0
console.log(sherlockAndAnagrams('abcd'));
// T.C.1-1 : 3
console.log(sherlockAndAnagrams('ifailuhkqq'));
// T.C.1-2 : 10
console.log(sherlockAndAnagrams('kkkk'));
// T.C.2 : 5
console.log(sherlockAndAnagrams('cdcd'));
