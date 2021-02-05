/*bcb ; aaaB ; Baa ; aaa ; madam ; racecar(7) */
//let s = 'madam';

function palindrome(s) {
  let pal = isPalindrome(s);
  if (pal==true) return -1;
  else {
    s = s.substring(0,pal[1]) + s.substring(pal[1]+1,);
    return isPalindrome(s)==true ? pal[1] : s.length-pal[1];
  }
}

function isPalindrome(s) {
  for (var i=0; i < Math.floor(s.length/2) ; i++) {
    if(s[i] != s[(s.length-1)-i]) return [false, i];
  }
  return true;
}

console.log('test: ' + palindrome('bcb'));
console.log('test: ' + palindrome('aaaB'));
console.log('test: ' + palindrome('madam'));
console.log('test0: ' + palindrome('aaab'));
console.log('test0: ' + palindrome('baa'));
console.log('test0: ' + palindrome('aaa'));
