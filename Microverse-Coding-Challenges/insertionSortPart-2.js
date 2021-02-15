function insertionSort2(n, arr) {
  for(let j=1 ; j < n ; j++) {
    for(let i=0 ; i <= j ; i++) {
      if(arr[j] < arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
    console.log(arr.join(' '));
  }
}

