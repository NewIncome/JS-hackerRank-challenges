function checkMagazine(magazine, note) {
  let replicate = 0;

  for (let i in note) {
    for (let j=i ; j<magazine.length ; j++) {
      if (note[i] === magazine[j]) {
        replicate += 1;
        break;
      }
    }
  }
  console.log(replicate === note.length ? 'Yes' : 'No');
}

// T.C.0
checkMagazine(new Object(['give','me','one','grand','today','night']), new Object(['give','one','grand','today']));
// T.C.1
checkMagazine(new Object(['two','times','three','is','not','four']), new Object(['two','times','two','is','four']));
// T.C.2
checkMagazine(new Object(['ive','got','a','lovely','bunch','of','coconuts']), new Object(['ive','got','some','coconuts']));
