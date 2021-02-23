let n = 10;
let m = [1,2];
let ans = [2];
for (let i=2 ; i<n ; i++) {
//while (ans)
  m.push(m[i-1] + m[i-2]);
  console.log(m[i-1] + m[i-2]);
  if(m[i]%2 == 0) ans.push(m[i]);
}
console.log(m);
console.log(ans);
console.log(ans.reduce((a,b) => a+b));


/* Other Solution
function fib(n) {
  let fibs = [1n, 2n];
  let num = 0n;
  let i = 1;
  while (num < n) {
    num = fibs[i-1] + fibs[i];
    if(num > n) break;
    fibs.push(num);
    i++;
  }
  console.log(fibs.filter(e => e%2n==0).reduce((a,b) => a+b).toString());
}
*/
/*
Ramesh's Fibbonachi sec FORMULA
prev + curr*4 
2 
2 
2*4 => prev*4 
2,8, 2+4*8=34 
2,8,34,8+34*4 
*/
