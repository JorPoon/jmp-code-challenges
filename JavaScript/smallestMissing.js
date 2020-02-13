// Given a sorted, distinct, non-negative integer array, find the smallest missing number

//O(n) time complexity 
// const smallestMissing = (arr) => {
//     if(arr.length === 0) {
//         return "Array is empty!"
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== i) {
//             return i
//         }
//     }
//     return arr.length
// } 

//binary search
// if midpoint is mismatched then everything to the right does not need to be checked
// if midpoint match then everything to the left does not need to be checked

const smallestMissing = (arr) => {
   let first = 0
   let last = arr.length-1
   let smallest

   if(arr.length === 0) {
       return "Array is empty!"
   }

   while (last - first > 1) {
       let midpoint = parseInt((first + last)/2)
       if(arr[midpoint] === midpoint) {
           first = midpoint
           midpoint = first
           smallest = midpoint + 1
       } else {
           last = midpoint
           midpoint = last
           smallest = midpoint
       }
   }
   
   return smallest
}

//tests
console.log(smallestMissing([0,1,2,3,6,7]))
console.log(smallestMissing([0,1,2,3,4,6,5,7,8,9,10,11,12,13,15,17,20,21,25]))
console.log(smallestMissing([0,1,3,6,7]))
console.log(smallestMissing([0,1,2,3,4,5,6,7,8,9,10,13]))
console.log(smallestMissing([]))



