function positiveSum(arr) {
    let newStr = arr.filter(item => item >= 0)

    return newStr.reduce((accumulator, currentValue) => accumulator + currentValue);
   }
   
   console.log(positiveSum([1, -4, 7, 12]));