function minimumBribes(q) {
  console.time('nychaos');
  let bribes = 0, bribe = 0, i = 0;
  // for (let i=0; i<q.length; i++) {
  //   let bribe = 0;
  //   for (let j=i+1; j<q.length; j++) { // 4loop used 2 stop loop if subs>2
  //     if (q[i] > q[j]) bribe += 1;
  //     if (bribe > 2) return console.log("Too chaotic");
  //   }
  //   bribes += bribe;
  // }

  let j = i+1;
  while (i < q.length) {
    if (q[i] > q[j]) bribe += 1;
    if (bribe > 2) return console.log("Too chaotic");

    // console.log(`i:${i}, j:${j}`);
    if (j >= q.length-1) { // for 2nd loop func conditions
      i += 1;
      bribes += bribe;
      bribe = 0
      j = i+1;
    } else j += 1;
  }

  console.log(bribes);
  console.timeEnd('nychaos');
}

// T.C. 0
minimumBribes([2,1,5,3,4]) // 3
minimumBribes([2,5,1,3,4]) // "Too chaotic"
console.log('');
// T.C. 1
minimumBribes([5,1,2,3,7,8,6,4]) // "Too chaotic"
minimumBribes([1,2,5,3,7,8,6,4]) // 7
console.log('');
// T.C. 2
minimumBribes([1,2,5,3,4,7,8,6]) // 4
console.log('');
// T.C. 11
minimumBribes([1,2,5,3,4,7,8,6]) // 4
