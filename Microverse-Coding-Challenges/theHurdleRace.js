function hurdleRace(k, height) {
  //height[i] against each k[i]
  return Math.max(...height) > k ? Math.max(...height) - k : 0
}