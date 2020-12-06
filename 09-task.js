function positiveSum(arr) {
    let newStr = arr.map(item => item * item)
    let sumSq = newStr.reduce((accumulator, currentValue) => accumulator + currentValue);
  
    return sumSq
}

console.log(positiveSum([1, 2, 2]));