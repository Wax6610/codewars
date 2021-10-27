const createPhoneNumber = (numbers) =>{
    const first = numbers.splice(0,3)
    const second = numbers.splice(0,3)

    return `(${first.join('')}) ${second.join('')}-${numbers.join('')}`
}

const num = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
console.log(num,"num")