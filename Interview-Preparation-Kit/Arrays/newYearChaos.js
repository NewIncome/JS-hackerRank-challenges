function minimumBribes(q) {
  // Write your code here
  // // Passed 3 out of 11...
  // let ar = new Array(...q)
  // let bribes = [];
  // q.forEach((e, i) => {
  //   ar.shift();
  //   ar.forEach(ee => {
  //     if (e > ee) {
  //       // console.log(`e:${e} < ee:${ee}, bribes:${bribes}`)
  //       bribes[i] & Number(bribes[i]) ? bribes[i] += 1 : bribes.push(1)
  //       if (bribes[i] > 2) bribes[0] = "Too chaotic";
  //     }
  //   });
  // });
  // return console.log(typeof bribes[0] == 'string' ? bribes[0] : bribes.length);

  // // Passed 1. didn't check backward
  // let bribes = [];
  // for (let i=0; i<q.length; i++) {
  //   const bN = bribes.length;
  //   // console.log(bribes);
  //   for (let j=i+1; j<q.length; j++) {
  //     if (q[i] > q[j]) {
  //       // console.log(q[i], q[j]);
  //       bribes[bN] ? bribes[bN] += 1 : bribes.push(1)
  //       if (bribes[bN] > 2) return console.log("Too chaotic");
  //     } else break;
  //   }
  // }
  // return console.log(bribes.reduce((ac,cr) => ac+cr));

  // // 3rd Try, by chechink for < to the right. // passed 7/11. (4)TIMEOUTS
  // let bribes = [];
  // for (let i=0; i<q.length; i++) {
  //   for (let j=i+1; j<q.length; j++) { // 4loop used 2 stop loop if subs>2
  //     if (q[i] > q[j]) bribes[i] ? bribes[i] += 1 : bribes[i] = 1;
  //     if (bribes[i] > 2) return console.log("Too chaotic");
  //     // console.log(`q[i]:${q[i]}, i:${i}`);
  //   }
  // }
  // console.log(bribes);
  // return console.log(bribes.reduce((ac,cr) => ac+cr));

  console.time('codezup');

  // 4th Try, by math with index && check 1st to right. Only passes 3...
  // let bribes = 0;
  // for (let i=0; i<q.length; i++) { // 4loop used 2 stop loop if subs>2
  //   const subs = (q[i]-1)-i;
  //   if (subs > 0 || q[i] > q[i+1]) bribes += Math.abs(subs);
  //   if (subs > 2) return console.log("Too chaotic");
  //   // console.log(`q[i]:${q[i]}, i:${i}`);
  // }
  // console.log(bribes);
  // console.log(bribes.reduce((ac,cr) => ac+cr));

  console.timeEnd('codezup');
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
