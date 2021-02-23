let n = 6
for(let i=1 ; i<=n ; i++) {
  console.log(' '.repeat(n-i) + '#'.repeat(i));
}

//testing out a better one like refactoring
//[...Array(4).keys()] returns the keys=indexes, of
//an array of 4 'undefined' items.

//console.log([...Array(4).keys()].reduce(acc, arr))

[...Array(n+1).keys()].reduce((acc,curr) => console.log(curr + ' '.repeat((n)-curr) + '#'.repeat(curr)));
