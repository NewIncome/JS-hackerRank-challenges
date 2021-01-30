//TC:[1];
//TC:[[1,3,4],[2,2,3],[1,2,4]];
//1.- Geat the area for Each Stacked-Cube Height.
//2.- Check And substract the min value against the neighbors.

// 1st TRY
let A = [[1,3,4],[2,2,3],[1,2,4]];
  //   let ac, tp, bt, lf, rt, cArea;
  //   let tArea = 0;
  //   for (let i=0 ; i<A.length ; i++) {
  //       for (let j=0 ; j<A[i].length ; j++) {
  //           ac = A[i][j];
  //           tp = A[i-1] != undefined ? A[i-1][j] : 0;
  //           bt = A[i+1] != undefined ? A[i+1][j] : 0;
  //           lf = A[j-1] != undefined ? A[i][j-1] : 0;
  //           rt = A[j+1] != undefined ? A[i][j+1] : 0;
  //           cArea = 2*((1*1)+(1*ac)+(ac*1));
  //           //Could get problems if array is too big. Fucks up after 22 .PUSHes
  //           //If array too big, just add to an integer *=
  //           tArea += cArea - Math.min(ac, tp) - Math.min(ac, bt) - Math.min(ac, lf) - Math.min(ac, rt);
  //           console.log("Cube " + (i + (j+1)) + " Area = " + cArea);
  //           console.log("real cArea = " + tArea);
  //       }
  //   }
  //   console.log(Math.min(3,3));

    /* >>>>>>>>>>>>>>>>>>>>>> Al's code <<<<<<<<<<<<<<<<<<<<<< */
 /*  function surfaceArea(A) {
   let sides = 0;
   for (var i = 0; i < A.length; i++) {
       for (var j = 0; j < A[i].length; j++) {
           let cr = A[i][j]
           sides += 2 * ((1*1)+(1*cr)+(cr*1))
           sides -= A[i][j-1] != undefined ? Math.min(A[i][j-1], cr) : 0;
           sides -= A[i][j+1] != undefined ? Math.min(A[i][j+1], cr) : 0;
           sides -= A[i+1] != undefined ? Math.min(A[i+1][j], cr) : 0;
           sides -= A[i-1] != undefined ? Math.min(A[i-1][j], cr) : 0;
       }
   }
   return sides
}*/

    /* >>>>>>>>>>>>>>>>>>>>>> 2nd TRY <<<<<<<<<<<<<<<<<<<<<< */
		function surfaceArea(A) {
		/*
		            Surface Area = 2(lh) + 2(lw) + 2(wh)
		test case 0:  1 = 6

		test case 1:  1 3 4 = 60
		              2 2 3
		              1 2 4
		Surface Area = 2(1*h) + 2(1*1) + 2(1*h) = 2*h + 2 + 2*h = 4*h + 2
		*/

		  let elemArea = 0;
		  let areaT = 0;

		  let h, left, right, front, back;

		  for(let i=0 ; i<A.length ; i++) {
		    for(let j=0 ; j<A[i].length ; j++) {
					h = A[i][j];
		      elemArea = 4*h + 2;
					//is (H_r >= H) ? -H : - H_r
		      left = (i==0) ? 0 : Math.min(A[i-1][j], h);
		      right = (i>A.length-2) ? 0 : Math.min(A[i+1][j], h);
		      front = (j==0) ? 0 : Math.min(A[i][j-1], h);
		      back = (j>A[i].length-2) ? 0 : Math.min(A[i][j+1], h);
		      areaT += elemArea - left - right - front - back;
					console.log(areaT, elemArea, left, right, front, back);
		    }
		  }

		}
surfaceArea(A);
