/*   TC:b="AABBC"; b="AABBC_C"; b="_"; b="DD__FQ_QQF"; b="AABCBC";
TC:b="RBY_YBR"; b="X_Y__X"; b="__"; b="B_RRBR"   */
    let b="AABBB";
/*let testObj = {a:1, b:1, c:0, d:2};
let myObjSet = new Set(b.split(''));
let myObj = new Object(b.split(''));
//[1, 2, 3, 4, 5]
//b.split('').forEach(e => myObj.push(e));
console.log("my testObj = " + testObj);
console.log("my myObjSet = " + myObjSet);
console.log("my myObj = " + myObj);
console.log(myObj);
console.log(myObjSet);*/
//All the above was just a test.//
    let B = b.split('');
    let myArr = [];
    let nonRep = new Set(b.split(''));
    let joyFlag = 'YES';
    /* ---FIRST--- Check for "_" and take it out*/
    if (b.includes('_')) {
        /*Here I seperate and count the items and the times repeated*/
        nonRep.forEach(e => {
            let cnt = 0;
            for (let i=0 ; i<B.length ; i++) {
                if (e === B[i]) cnt++;
            }
            myArr.push([e, cnt]);
            /*Check for quantity*/
            if (e!='_' && cnt==1) joyFlag = "NO";
       });   
        //return joyFlag;
    }
    /*Check if the Ladybugs are Happy(together) && whatch our for 3 or more together*/
    else {
        for (let i=0 ; i<B.length ; i++) {
            if (B[i] != B[i+1] && B[i] != B[i-1]) joyFlag = "NO";
        }
    //return joyFlag;
    }
    /*
    1.- If '_' cnt letter, if lettersCnts are 1 >   "YES"
    2.- If no '_', check if letters are arranged and repeated. "YES"
    3.- Else "NO".
    */
console.log(myArr);
console.log(joyFlag);
