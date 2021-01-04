function equalizeArray(arr) {
  let cnt = 0;
  let comp = 0;
  arr.forEach(el => {
      for(let i=0 ; i<arr.length ; i++) {
          if(el == arr[i]) cnt++;
      }
      if (cnt > comp) comp = cnt;
      cnt = 0;
  });
  return arr.length - comp;
}