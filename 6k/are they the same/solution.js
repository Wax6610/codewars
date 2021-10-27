const comp1 = (a, b) => {
  if (a === null || b === null) return false;
  let sqrt = b.map((v) => Math.sqrt(v));
  for (const item of a) {
    const index = sqrt.indexOf(item);
    if (index < 0) return false;
    sqrt.splice(index, 1);
  }
  return true;
}

const comp2 = (a, b) => {
  if (a === null || b === null) return false;
  a.sort((a,b) => a-b)
  b.sort((a,b) => a-b)

  return a.map(v => v*v).every(value, index => value === b[index])
}

