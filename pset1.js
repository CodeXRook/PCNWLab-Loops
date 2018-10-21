/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
const average = arr => {
    const arrCopy = arr.slice();
    const total = 0 
    for (let i = 0; i < arrCopy.length; i++) {
      total += arrCopy[i]
      return total / arryCopy.length
 }
console.log(average[1, 2, 3, 4])

/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
 const squareEach = arr =>{
     for (let arr = 0; arr < arr.length; i++) {

        Math.pow(arr[i],2);
    
    console.log(squareEach[1,2,3,4]));
 }


--------------------------------------

deep copy array 
 const squareEach = arr =>{
      cosnt arrCopy = arr.slice(0);
      const squared = [];
      for (let i =0; i < arrCopy.length; i++){
           squared.push (arrCopy[i] ** 2);
           copyArr[i] = copyArr[i] **2;
      }
      return copyArr;
 }

 console.log (squareEach([1, 2, 3, 4]));

 const squareEach = (arr) =>
 let resulst =[]
 for (let i =0; i < arr.length; i++){
     result.push  (arr[i]  * arr{i});

 }

 return result;
/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/
  const squareEach = (arr) =>{
    const copyArr = arr.slice(0);
    for (let i = 0; i < copyArr.lenght; i++){
        copyArr{i} =copyArr[i]** 2;
    }
    return copyArr;
  }

  const averageSquare = (arr) =>{
      const squaredElements = squareEach(aar);
      return average(SquaredElements);
  }

  console.log(averageSquare[1,2,3,4]));
  
  /*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
const negateArr = arr =>{
 const copyArr = [...arr];
 for (let i =0; i < copyArr.length; i++) {
     copyArr[i] *= -1;
    // copyArr[i] = copyArry[i] * -1;
 }
 retrun copyArr;
}



/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/
 const reverseArr = arr => {
    let arrCopy = [];

    for (let i = 0; i < arr.length; i++){
        arrCopy[arr.length - 1 - i ] =arr[i];
    }
    return arrCopy:
 }

 console.log(reverseArr([1, 2, 3, 4]));

// Another example same probllem2

 const reverseArr2 = (arr) => {
     let arryCopy =[];

     for ( let i = arr.length - 1; i >= 0; i--){
         arrCopy.push(arr[i]);
     }
     return arrCopy;
 }

// Another example same probllem2

/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/
 const negateBackwards = arr =>{
    le copyArr = []
    for (let i = arr.legnth - 1; i >= 0; i--){
        copyArr.push(arr[i] * -1));
    }
return copyArr;
 }

// anotherway 

const negatBackwards2 = (arr) => negateArr(reverseArr(arr))
