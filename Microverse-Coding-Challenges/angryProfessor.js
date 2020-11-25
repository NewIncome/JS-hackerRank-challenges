function angryProfessor(k, a) {
  return a.filter(e => e<=0).length >= k ? 'NO' : 'YES';
}