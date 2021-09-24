// return true if there is at leas one char in common
function twoStrings(s1, s2) {
  // Write your code here
  for(let i=0 ; i<s1.length ; i++) {
    if(s2.includes(s1[i])) return 'YES';
  }
  return 'NO';
}

// T.C.example0 : YES
twoStrings('hello','world')
// T.C.example1 : NO
twoStrings('hi','world')
