
let arr = [1, 25, 45, 50, 85, 145, 202 ]

let target = 57

function binarySearch(arr, target){
    
    
    let start  = 0
    let end = arr.length - 1
    let mid;

    while( start <= end ){
        // calculating the mid
        mid = Math.floor( (start + end) / 2 )
    
        // If target matches with mid value
        if( arr[mid] === target ){
            return `Data found in ${mid}`
        }
        // If mid is smaller than target
        else if( arr[mid] < target){
            start = mid + 1
        }
        // If mid is greater than target
        else{
            end = mid - 1
        }
    }

    return `the floor of ${target} is ${arr[end]}`;
}  


console.log(binarySearch(arr, target));