function repeatedString(s, n) {
  //aba  ,  1000000000000
  /*let rep = 0;
  let str1 = s.split("");
  let strA = s.split("");
  for (let i=0 ; strA.length<n ; i++) {
      strA.push(str1[i]);
      if (strA.length != n && i == (str1.length-1)) i = -1; //-1 because it increments i++ at the end of the loop.
  }
  strA.forEach(e => {if (e == "a") rep++;});
  return rep;
  //return strA;    Commented because it cannot do a loop 1,000,000,000,000 long */
  let fstReps = s.split('').filter(e => {return e == 'a'}).length; //aba = 2;
  let timesDivi = Math.floor(n/s.length);
  let totalR = fstReps * timesDivi;
  //if (n % s.length != 0) {
      for (let i=0 ; i<(n%s.length) ; i++) {
          if (s.split('')[i] == 'a') totalR++;
      }
  //}
  return totalR;
}