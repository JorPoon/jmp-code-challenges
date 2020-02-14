//given two arrays and a value, return true if the given value can be found as the sum of any two digits. 
//each digit is from one of the array


const sum = (a, b, v) => {
    let obj = {}
    let hasValue = false

    for (let i = 0; i < a.length; i++) {
        if (!(a[i] in obj)) {
            let difference = 0
            if ( v > a[i]) {
                difference = v - a[i]
            } else {
                difference = a[i] - v
            }
            obj[difference] = difference
        }
    }
    for (let j = 0; j <= b.length; j++) {
        if(obj[b[j]]) {
            return true
        } 
    } 
    return hasValue
}


let arr1 = [1,9,43,5,6,7,8]
let arr2 = [40, 30, 20, 60, 70]

// tests
console.log(sum(arr1, arr2, 78))
console.log(sum(arr1, arr2, 61))
console.log(sum(arr1, arr2, 24))
console.log(sum(arr1, arr2, 16))
console.log(sum(arr1, arr2, 11))
console.log(sum(arr1, arr2, 46))
