function divisibleSumPairs(n, k, ar) {
  let cnt = 0;
  ar.forEach((e, i) => {
    /*for(let j=i+1 ; j<ar.length ; j++) {
      if((e+ar[j])%k==0) cnt++;
    }*/
    //console.log(ar.slice(i+1).find(elm => (elm + e)%k == 0));
    cnt += ar.slice(i+1).filter(elm => (elm + e)%k == 0).length;
  });
  return cnt;
}

