function positiveSum(arr) {
    let newStr = arr.filter(item => item >= 0)
    let positive = newStr.reduce((accumulator, currentValue) => accumulator + currentValue);
    let newStr2 = arr.filter(item => item < 0).map(item => item)
    let negative = newStr2.reduce((accumulator, currentValue) => accumulator + currentValue);
    let newArr = [positive, negative]
    return newArr 
}

console.log(positiveSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));