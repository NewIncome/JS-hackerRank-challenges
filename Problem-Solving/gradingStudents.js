function gradingStudents(grades) {
  // Write your code here
  grades.forEach((grade, i) => {
    if (grade > 37 && grade%5 > 2) {
      if (grade%5 === 3) grades[i] = grade + 2;
      else if (grade%5 === 4) grades[i] = grade + 1;
    } 
  });
  return grades;
}

// T.C.1 :     [75,67,40,33]
console.log(gradingStudents([73,67,38,33]));
