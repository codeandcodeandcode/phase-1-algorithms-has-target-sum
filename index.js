function hasTargetSum(array, target) {
  // Write your algorithm here
  let TargetSum = (array, sum) => {
  
             
    for(let x in array){
      for(let y in array){
        
        if (array[x] + array[y] == sum){
            return true;
           }

        }
    }  	
return false;
}



let array = [2, 3, 4, 3, 6, 7]
let sum = 100
console.log(TargetSum(array, sum));

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  TARGET SUM FUNCTION TAKES AN ARRAY AND SUM AS AN INPUT
MAKETWO NESTED FOR LOOP FOR TRAVERSING EVERY COMBINATIONS OF NUMBER IN ARRAY
CHECK IF  COMBINATIONS SUM IS EQUAL TO TARGETSUM
           REUTRN TRUE
RETURN FALSE

*/

/*
  Given an array of integers and a target number, return the two integers that add up to the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
