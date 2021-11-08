function ipsBetween(start, end) {
  const groupsStart = start.split(".").map((v) => Number(v));
  const groupsEnd = end.split(".").map((v) => Number(v));

  let result = 0;
  let i = 0;
  for (i; i < 3; i++) {
    result += Math.pow(256, 3 - i) * (groupsEnd[i] - groupsStart[i]);
  }
  result += groupsEnd[i] - groupsStart[i];
  return result;
}

