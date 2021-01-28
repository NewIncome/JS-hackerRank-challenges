/*TC:(3, 1, 2)   TC:(4,10,100)   TC:(2, 2, 3)
TC11:(2,1,1) (100,1,1) (999,1,2)
TC4:(9,25,59) (18,28,28) (12,26,35) (63,97,39) (72,16,82)
*/ 
/*Not working
    let n = 12; let a = 26; let b = 35;
    let ans = '';
    let revCnt = n-1;
    let cach;
    if (a != b) {
        if (a > b) {
            cache = b;
            b = a;
            a = cache;
        } 
        for (let i=0 ; i<n ; i++) {
            ans = ans + ((a*(revCnt-i)) + b*i) + ' ';
            //console.log(ans);
        }
        //ans = ans.sort((c,d) => c-d);
        console.log(ans);
    }
    else {
        console.log(a*revCnt);
    }
*/
/* *************************************** */
  let j = a*(n-1);
  let ans = [j]
  for(let i=1 ; i<n ; i++){
    j += b-a;
    ans.push(j);
  }
  return [...new Set(ans)].sort((a, b) => a - b);

