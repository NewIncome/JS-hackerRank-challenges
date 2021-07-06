function makeAnagram(a, b) {
  // Write your code here
  // >>>>> PSEUDO-CODE <<<<<
  // 1. loop over str1
  // 2. check if str2 has each element
  // 3. if it does, remove it from str1
  // 4. else, +1 to remaining
  // 5. return str1.length + rem
  let rem = 0;
  a.split('').forEach(e => {
    if (b.includes(e)) {
      const idx = b.indexOf(e);
      // console.log(`${b.slice(0, idx)} ++ ${b.slice(idx+1, b.length-1)}`);
      b = b.slice(0, idx) + b.slice(idx+1, b.length);
    } else rem += 1;
    // console.log('b: ', b, '; rem: ', rem);
  });
  return rem + b.length;
}

// T.C.0 - 4
console.log(makeAnagram('cde', 'abc'));
// T.C.1 - 30
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));
// T.C.2 - 2
console.log(makeAnagram('showman', 'woman'));
