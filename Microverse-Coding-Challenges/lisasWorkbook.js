function workbook(n, k, arr) {
    //each page. Count each chapter = Arr[i]     ;   4 2 6 1 10
    let pg = 1;
    let lucky = 0;
    arr.forEach(ch => {
        let prob = 0;
        while(ch>prob) {
            for(let i=0; i<k ; i++) {
               prob++;
               if (prob == pg) lucky++;
               if (prob == ch) break;
            }
            pg++;
            console.log(prob, pg, lucky);
        }
        //console.log(prob, pg, lucky);
    });
    console.log(pg, lucky);
    return lucky;
    
}
