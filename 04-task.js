

  function capitalizeNames(arr) {
   let newArr = arr.map(item => item.toLowerCase())
   let secArr =newArr.map(item => item.charAt(0).toUpperCase() + item.slice(1) )
   return secArr
 }
 
 console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

