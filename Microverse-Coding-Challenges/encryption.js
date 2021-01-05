function encryption(s) {
  /* haveaniceday -> hae and via ecy -> 12
  m=3; M=4;  0,4,8, ,1,5,9, ,2,6,10, 3,7,11 */
  let M = Math.ceil(Math.sqrt(s.length));
  let m = Math.floor(Math.sqrt(s.length));
  let toPrint = [];
  for (let i=0 ; i<M ; i++) {
      for (let j=i ; j<s.length ; j+=M) {
          toPrint.push(s[j]);
      }
      toPrint.push(" ");
  }
  //toPrint.pop();
  return toPrint.join("");
}