function findDigits(n) {
  let dig = String(n).split(""); let cnt = 0;
  dig.forEach(elm => {
      if(n%elm == 0) cnt++;
  });
  return cnt;
}