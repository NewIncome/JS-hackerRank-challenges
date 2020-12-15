function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine = 0;
  if (y2 < y1) {
      fine = 10000;
  }
  if (m2 < m1 && y2 == y1) {
      fine = Math.abs((m2 - m1) * 500);
  }
  if (d2 < d1 && m2 == m1 && y2 == y1) {
      fine = Math.abs((d2 - d1) * 15);
  }
  return fine;

}