const highAndLow = (string) =>{
  const array = string.split(' ').map(v => Number(v))
    return Math.max(...array) + ' ' + Math.min(...array)
}


