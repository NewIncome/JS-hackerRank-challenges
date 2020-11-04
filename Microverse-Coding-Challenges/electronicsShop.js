function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
e.g.:b1 = 9     ans = 8
   b2 = 2     ans = -1
   keyB = [1,3,5]
   mouS = [2,3,5]
step:- sum each elm from each arr (2)
   - compare de summed elmS to the 'b' and keep the biggest that is lower <= b.
   */
  //let sumElms = keyboards.map(e1 => drives.forEach(e2 => e1 + e2));
  let max = -1;
  keyboards.forEach(k => {
      let temp = 0;
      drives.forEach(d => {
          if (k + d <= b){
              temp = k + d;
              max = temp > max ? temp : max;
          }
      })
  });
  return max;
}