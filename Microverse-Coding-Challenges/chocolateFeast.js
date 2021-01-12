//Test Cases: (10, 2, 5), (12, 4, 4), (6, 2, 2)
//Ans: 6, 3, 5
let n = 6;
let c = 2;
let m = 2;

let wrap = parseInt(n/c);
console.log("Wrap: " + wrap);
let tChoc = wrap;
console.log("tChoc: " + tChoc);

while(wrap >= m) {
//Remaining Wraps ARE MORE THAN or = to EXchangeWrap Quantity
  console.log("inLoop: tChoc = " + tChoc + " + " + parseInt(wrap/m));
  tChoc += parseInt(wrap/m);
  //tChoc = actualChocolates + EXchangedWraps
  console.log("inLoop: Wrap = " + parseInt(wrap/m) + " + " + wrap%m);
  wrap = parseInt(wrap/m) + wrap%m;
  //wrap = EXchangedWraps + RemainderWraps
}

console.log("Total Choc: " + tChoc);
