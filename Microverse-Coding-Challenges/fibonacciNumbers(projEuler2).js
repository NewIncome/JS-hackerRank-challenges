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

// T.C.example0 : 10
fib(10)
// T.C.example1 : 144
fib(100)
