// Given a sorted, distinct, non-negative integer array, find the smallest missing number

//O(n) time complexity 
const smallestMissing = (arr) => {
    if(arr.length === 0) {
        return "Array is empty!"
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i
        }
    }
    return arr.length
} 

//tests
// console.log(smallestMissing([0,1,2,3,6,7]))
// console.log(smallestMissing([0,1,3,6,7]))
// console.log(smallestMissing([0,1,2,3,4,7,8]))
// console.log(smallestMissing([]))


//binary search
// if midpoint is mismatched then everything to the right does not need to be checked
// if midpoint match
