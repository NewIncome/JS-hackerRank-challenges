function activityNotifications(expenditure, d) {
  // Write your code here
  let i = 0, j = 0, medianArr = [], operations = 0, median = 0;
  // 1. while loop, i<expenditure.length-d
  // 2. initialize each time the medianArr; if (medianArr[0]) medianArr.push(exp[j+i])
  // 3. get medianArr Ordered => medianArr[j-1] > exp[j+i] ? .unshift(exp[j+i]) : .push(exp[j+i])
  // 4. IF (j < d), j++
  // 5. ELSE get the median value, let median
  //  5a. if median.length is odd, get the middle one
  //  5b. else, get the average of the 2 middle values medianArr[.length/2] + medianArr[.length/2 + 1] / 2
  // 6. && check for operations. if (exp[j+i] >= 2*median) operations++
  // 7. && reset loop j = 0, medianArr = [], i++;
  console.log(`expenditure:[${expenditure}]`, ', d:', d);
  while (i<expenditure.length-d) {
      if (j < d) {
          if (!medianArr[0]) medianArr.push(expenditure[j+i]);
          else {
            medianArr[j-1] > expenditure[j+i] ? medianArr.splice(j-1,0,expenditure[j+i]) : medianArr.push(expenditure[j+i]);
            // console.log('j', j, medianArr[j-1], '>', expenditure[j+i], '?');
          }
          // console.log('j', j, '<', 'd', d);
          j += 1;
      }
      else {
        console.log('inside ELSE');
          let md = Math.floor(medianArr.length/2);
          median = medianArr%2 === 0 ? (medianArr[md-1] + medianArr[md]) / 2 : medianArr[md];
          console.log(medianArr, median, `${expenditure[j+i]} >= 2*${median}`);
          if (expenditure[j+i] >= 2*median) operations += 1;
          
          j = 0;
          medianArr = [];
          i += 1;
      }
  }
  return operations;
}

// T.C.0 -> 2
console.log(activityNotifications([2,3,4,2,3,6,8,4,5], 5));
// // T.C.1 -> 0
// console.log(activityNotifications([1,2,3,4,4], 4));
// // T.C.2 -> 1
// console.log(activityNotifications([10,20,30,40,50], 3));
