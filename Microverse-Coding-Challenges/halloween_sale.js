/*price(p), discount(d), min(m), Savings(s)
20 3 6 80
6
20, 17, 14, 11, 8, 6

*/
// let p = 20; d = 3; m = 6; s = 80;
// let cnt = 0;
// //if (s < p) return 0;
// while(s >= m) {
//   /*
//   if price < savings ? cnt ++ & savings-price
//   if (price-d) < savings ? cnt ++
//   */
//   if (p < s) {
//     s -= p;
//     console.log('s: ' + s);
//     cnt++;
//     console.log('cnt: ' + cnt);
//     p = p<=m ? m : p-d ;
//     console.log('p: ' + p);
//   }
// }
// console.log('Could buy ' + cnt + ' products');

//>>> Approach 2: <<<
// if(p>s) console.log(0);//return
// else {
//   let pricesArr = [p];
//   s -= p;
//   while(s >= m) {
//     pricesArr.push((p-d) > m ? p-=d : m);
//     s -= p;
//     console.log('s, p: ' + s, p);
//   }
//   console.log('PricesArray: ' + pricesArr);//return
// }

//>>> Approach 3: <<<   Good!
let p = 20; d = 3; m = 6; s = 80;
// s.80 - 20 ; cnt++ //1
// s.60 - (20-3) ; cnt++ //2
// s.43 - (17-3) ; cnt++ //3
// s.29 - (14-3) ; cnt++ //4
// s.18 - (11-3) ; cnt++ //5
// s.10 - (8-3) ; cnt++ //6 (8-3)<m.6
// s.4  - (6) ; cnt++ //end
let cnt = 0;
while(s>=m && s>=p) {
  if (cnt==0) {
    s -= p;
    cnt++;
  }
  else {
    cnt++;
    p = p-d<m ? m : p-d;
    s -= p;
  }
}
console.log(cnt);
//Good!!
