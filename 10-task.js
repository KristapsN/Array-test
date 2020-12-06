function positiveSum(arr) {
    let newStr = arr.map((item) => {if (Math.sqrt(item) % 1 !== 0 ){ return item * item}else { return  Math.sqrt(item)}})
    
  
    return newStr
}

console.log(positiveSum([4, 3, 9, 7, 2, 1]));

