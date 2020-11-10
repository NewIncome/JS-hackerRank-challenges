function pageCount(n, p) {
  /*
    * Write your code here.
    1   -0 -3  n, p  6-n  7-n
    2,3 -1 -2  5, 4  4,3  5,4-
    4,5 -2 -1        2,1  3,2-
    6,7 -3 -0        0    1,0-  */
  let totCnt = Math.trunc(n/2);
  let upCnt = Math.trunc(p/2);
  let dnCnt = totCnt-upCnt;
  return Math.min(upCnt, dnCnt);
}
