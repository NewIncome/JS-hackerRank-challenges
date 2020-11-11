function pickingNumbers(a) {
  // Write your code here
/*
4 6 5 3 3 1  -->  [1][3,3,4][5, 6]  ans = 3
1 2 2 3 1 2  -->  [1,1,2,2,2][3]  ans = 5
1 1 2 2 2 3
*/
  let result = 0;
  let cnt = 0;
  a.sort((a,b)=>a-b);
  for (let i=0 ; i < a.length ; i++) {
      cnt = 0;
      for (let j=i ; j < a.length ; j++) {
          if (Math.abs(a[j] - a[i]) < 2) cnt++;
      }
      if (cnt > result) result = cnt;
  }
  return result;   
}