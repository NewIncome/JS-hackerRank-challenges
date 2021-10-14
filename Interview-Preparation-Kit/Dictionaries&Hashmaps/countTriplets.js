// Complete the countTriplets function below.
function countTriplets(arr, r) {
	// ---Approach#1---
  // check if there is a 'j*r' val
  // true? getremove it from cpArr and go check k val
    // 
  // false? i++
  // ---Approach#2--- [0]
  // cnt [0] values (i), i*r(j) vals, j*r()k vals
  // 3-1  i,j,k           (1*1*1)
  // 4-2  i,j1,k i,j2,k   (1*2*1)   (1*2*2)   (1*2*3)
  // 5-4  i,j1,k1 i,j1,k2, i,j2,k1 i,j2,k2
  // 6-?  i1,j1,k1 i1,j1,k2, i1,j2,k1 i1,j2,k2, i2,j1,k1 i2,j1,k2, i2,j2,k1 i2,j2,k2, 
  // (1*2*1)
  // CNT reps
  // CHECK  (for loop up to length-2)
  // arr.each(e =>
    // is_i? ? if arr.includes(e*r{j} && e*r*r{k})
    // CNT number of i,j,k 's  : reps[i,j,k]
    // else i++
  // )
  // CNT
  // 
}

// T.C.0: 2
console.log(countTriplets([1,2,2,4], 2));
// T.C.1: 6
console.log(countTriplets([1,3,9,9,27,81], 3));
// T.C.2: 4
console.log(countTriplets([1,5,5,25,125], 5));

