function luckBalance(k, contests) {
	contests.sort((a,b) => b[0]-a[0]);
  let luck = 0, loose = 0;
  contests.forEach(e => {
    console.log(`e:${e}, luck:${luck}`);
    if(e[1] == 0) {
      luck += e[0];
    } else {
      if(loose < k) {
        luck += e[0];
        loose += 1;
      } else {
        luck -= e[0];
      }
    }
  });
  return luck;
}

// T.C.0: 29
console.log(luckBalance(3, [[5,1],[2,1],[1,1],[8,1],[10,0],[5,0]]));
// T.C.1: 42
console.log(luckBalance(5, [[13,1],[10,1],[9,1],[8,1],[13,1],[12,1],[18,1],[13,1]]));
// T.C.2: 21
console.log(luckBalance(2, [[5,1],[4,0],[6,1],[2,1],[8,0]]));

