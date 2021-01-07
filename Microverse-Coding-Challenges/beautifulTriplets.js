function beautifulTriplets(d, arr) {
    // i < j < k  ;  j - i = k - j = d.
    let trpB = 0;
    /*let tst1 = [];
    arr.forEach((e, i, arr) => {
       if (arr[i-1] < e && e < arr[i+1]) {
           tst1.push(arr[i-1]);
           if (e-arr[i-1] == d && arr[i+1]-e == d) trpB++;
           }
    });    Didn't work  :'(   */
    
    arr.forEach(i => { arr.includes(i+d) && arr.includes(i+d+d) ? trpB++ :''; });
        //console.log(arr.filter(j => j == i+d).filter(k => k == i+d*2):
    return trpB;
    /*console.log(trpB);
    console.log(tst1);*/
}
