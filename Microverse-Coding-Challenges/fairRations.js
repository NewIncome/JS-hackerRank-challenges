//Condition 1.have to give bread to i+1 ¡¡OR!! i-1 too.
//Condition 2.Arr must have at least 1 even No. Else = "NO".
//Condition 3.If there is 1 even No but Arr is length 2 = "NO".
/* 1stTC:[2,3,4,5,6]        
TC:[4,5,6,7]  TC:[3,4,5,6]  TC:[2,4,5,5,6]  TC:[1,3,5,6,7]  TC:[1,1]
     +1+1        +1+1              +1+1       +1+1 +1+1        +1+1
       +1+1        +1+1                              +1+1   
¡NO!        ¡NO!
TC:[3,3,3]  TC:[1,2]        
   +1+1        +1+1
     +1+1
    */
    //let B = [2, 3, 4, 5, 6]; "GOOD" let B = [4,5,6,7]; "GOOD"
    let B = [2, 3, 4, 5, 6];
//for  B = [2, 3, 4, 5, 6];
//console.log(B.filter(e => e%2));  >>>gives>>>   [ 3, 5 ]   same as e%2!=0));
    let condCnt = 0;
    let bread = B.length;
    let bdCnt = 0;
    for (let i=0 ; i<B.length ; i++) {
        if (B[i-1]) {
            if (B[i+1]) condCnt++;
        }
    }
    if (condCnt>0) {
        for (let i=1 ; i<condCnt ; i++) {
            B[i]++; bdCnt++;
            B[i+1]++; bdCnt++;
        }
    }
    else {
        bdCnt = "NO";
    }
    return bdCnt;
B.filter(e => e%2)

//Tests
//B.forEach(e => {if(e%1) console.log(e + " is pair!");});
//B.forEach(e => console.log(e, e%2));

/*> B.forEach(e => console.log(e,e%2))
2 0
3 1
4 0
5 1
6 0 */

//if (B.length==2 && B.map(e => e%2).includes(0))
//=========================================================
/* Only passes the 1st two Test Cases
    let condCnt = 0;
    let bread = B.length;
    let bdCnt = 0;
    for (let i=0 ; i<B.length ; i++) {
        if (B[i-1]) {
            if (B[i+1]) condCnt++;
        }
    }
    console.log(B);
    console.log("CCnt: " + condCnt);
    if (condCnt>0) {
        for (let i=1 ; i<condCnt ; i++) {
            B[i]++; bdCnt++;
            B[i+1]++; bdCnt++;
        }
    }
    else {
        bdCnt = "NO";
    }
*/
