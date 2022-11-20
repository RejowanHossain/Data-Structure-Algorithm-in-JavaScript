
let arr = [1, 25, 45, 50, 85, 145, 202 ]

let target = 145

function binarySearch(arr, target){
    
    // calculating the mid
    let start  = 0
    let end = arr.length - 1
    let mid = Math.floor( (start + end) / 2 )

    while( start <= end ){
    
        // If target matches with mid value
        if( arr[mid] === target ){
            return `Data found in ${mid}`
        }
        // If mid is smaller than target
        else if( arr[mid] < target){
            start = mid + 1
            mid = Math.floor( (start + end) / 2 )
        }
        // If mid is greater than target
        else{
            end = mid - 1
            mid = Math.floor( (start + end) / 2 )
        }
    }

    return 'Data not found'
}  


console.log(binarySearch(arr, target));