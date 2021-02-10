function gameOfThrones(s) {
/*
1.- count each letter and how many there are
2.- if only one is odd = true, if length is odd
3.- if length is even all letters must have even numbers
*/
  let v1 = s.split('').reduce((arr, elem) => {
    if(elem in arr) arr[elem]++;
    else arr[elem] = 1;
    return arr;
  } ,{});
  return (Object.values(v1).filter(e => e%2!=0).length > 1) ? 'NO' : 'YES';
}
