let ar = [3, 2, 1, 3] //ans:2

//Option #1:
// ar.sort((a, b) => b - a);
// console.log(ar);
// console.log(ar.filter(e => e == ar[0]));

console.log(ar.sort((a, b) => b - a).filter(e => e==ar[0]).length);
