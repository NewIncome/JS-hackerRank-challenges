function insertionSort1(n, arr) {
  let tmp = arr[n-1]
  for (let j=n-1 ; j>=0 ; j--) {
    tmp < arr[j-1] ? arr[j] = arr[j-1] : arr[j] = tmp;
    console.log(arr.join(' '));
    if(arr[j]==tmp) break;
  }
}

