function checkMagazine(magazine, note) {
  let replicate = 0;

  /*
  for (let i in note) {
    for (let j=i ; j<magazine.length ; j++) {
      if (note[i] === magazine[j]) {
        replicate += 1;
        break;
      }
    }
  }
  */
  for (let i=0 ; i<magazine.length ; i++) {
    let indx = magazine.indexOf(note[i]);
    if(indx != -1) {
      magazine.splice(indx,1);
      replicate += 1;
    } else break;
  }
  console.log(replicate === note.length ? 'Yes' : 'No');
}

// T.C.0: Yes
checkMagazine(new Object(['give','me','one','grand','today','night']), new Object(['give','one','grand','today']));
// T.C.1: No
/*
checkMagazine(new Object(['two','times','three','is','not','four']), new Object(['two','times','two','is','four']));
// T.C.2: No
checkMagazine(new Object(['ive','got','a','lovely','bunch','of','coconuts']), new Object(['ive','got','some','coconuts']));
// T.C.3: Yes
checkMagazine(new Object(['apgo','clm','w','lxkvg','mwz','elo','bg','elo','lxkvg','elo','apgo','apgo','w','elo','bg']), new Object(['elo','lxkvg','bg','mwz','clm','w']));
*/