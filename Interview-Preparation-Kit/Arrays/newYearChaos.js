function minimumBribes(q) {
  console.time('nychaos');
  let tBribes = 0, p1 = 1, p2 = 2, p3 = 3;

  for(let i=0 ; i<q.length ; i++) {
    switch (q[i]) {
      case p1:
        p1 = p2;
        p2 = p3;
        p3 += 1;
        break;
      case p2:
        tBribes += 1;
        p2 = p3;
        p3 += 1;
        break;
      case p3:
        tBribes += 2;
        p3 += 1;
        break;
      default:
        return console.log("Too chaotic");
    }
  }

  console.log(tBribes);
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

// correct solution by  Brian Dyck (https://www.youtube.com/watch?v=LgszjFykAbE)
