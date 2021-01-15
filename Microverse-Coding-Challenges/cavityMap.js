/*  1112
    1912
    1892
    1234    */
//cell not on the border && adjacent cells are smaller => it's called a cavity.
// 00, 01, 02, 03 - X     1,0 1,3 - X     will only check for:
// 10, 13 - X     11 & 12   for 11 check for 01, 21, 10, 12 
// 20, 23 - X     21 & 22   for 21 check for 11, 21, 20, 22
// 30, 33 - X
    let grid = ["1112","1912","1892","1234"];
    let tp, bt, lf, rt, ac;
    let idx = [];
    console.log(grid);
    for (let i=1 ; i<grid.length-1 ; i++) {
        for (let j=1 ; j<grid[i].length-1 ; j++) {
            tp = grid[i-1].charAt(j);
            bt = grid[i+1][j]; //just seeing 2 diff methods.
            lf = grid[i].charAt(j-1);
            rt = grid[i][j+1];
            ac = grid[i].charAt(j);
            //console.log(j, ac); Current 'j' index and Val
            //console.log(tp, bt, lf, rt); //2see currVal top, btm, left & rt
            if (ac>tp && ac>bt && ac>lf && ac>rt) idx.push([i,grid[i].substring(0,j) + "X" + grid[i].substring(j+1, grid[i].length+1)]);
            //need Saveit and change it at the end; Index i and whole str.
        }
        console.log(grid[i]);
    }
    console.log(idx);
/*    if (idx) idx.forEach((e,i) => {
        grid[e[0]] = e[1];
    });*/
    for(let i=0 ; i<idx.length ; i++) {
        grid[idx[i][0]] = idx[i][1];
    }
    //superIF >>> grid[i].substring(0,j) + "X" + grid[i].substring(j+1, grid[i].length+1);
    console.log(grid);

//DOESN'T PASS ALL THE TEST CASES!!. I'm sure it's because of the last IF.
//TO DO STILL:   Better worked with cloning the basic array and working with the new one.
