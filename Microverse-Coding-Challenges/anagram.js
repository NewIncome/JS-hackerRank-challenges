/*  Minimum # changes to make an Anagram:
aaabbb   aaa / bbb   3
ab       a / b       1
abc      a / b       -1 not possible
mnop     mn / op     2
xyyx     xy / yx     0
xaxbbbxx xaxb / bbxx 1

asdfjoieufoa         3
fdhlvosfpafhalll     5
mvdalvkiopaufl       5

1.- if string is pair, divide the string into 2, s1 & s2, and order them. Else -1.
2.- compare s1[i] != s2[i], if so, cnt +1
3.- return cnt.
*/
  let s = 'xyyx'
  console.log('s: '+s);
  if(s.length%2 == 0) {
    let s1 = s.slice(0, s.length/2).split('');
    console.log('s1: '+s1);
    let s2 = s.slice(s.length/2, );
    console.log('s2: '+s2);
    s1.forEach((e, i) => {if(s2.includes(e)) s2 = s2.replace(e, '');});
    console.log(s2.length);
  }
  else console.log(-1);
