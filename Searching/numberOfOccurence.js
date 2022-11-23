
let arr = [1, 25, 45, 50, 50, 50, 85, 145, 202 ]

let target = 50

function findFirstIndex( arr, target ){
    
    let start  = 0
    let end = arr.length - 1
    let mid;
    let index = -1


    while( start <= end ){

        // calculating the mid
        mid = Math.floor( (start + end) / 2 )

    
        // If target matches with mid value
        if( arr[mid] === target ){
            index = mid;
            end = mid - 1;
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

    return index;
}

function findLastIndex( arr, target ){
    
    let start  = 0
    let end = arr.length - 1
    let mid;
    let index = -1


    while( start <= end ){

        // calculating the mid
        mid = Math.floor( (start + end) / 2 )

    
        // If target matches with mid value
        if( arr[mid] === target ){
            index = mid;
            start = mid + 1;
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

    return index;
}

function countOccurence( arr, target){
    let firstIndex = findFirstIndex( arr, target );
    let lastIndex = findLastIndex( arr, target );

    return (lastIndex - firstIndex) + 1

}


console.log(countOccurence( arr, target ))