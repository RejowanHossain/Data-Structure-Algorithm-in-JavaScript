let arr = [202, 145, 85, 50, 45, 25, 1 ]

// let arr = [1, 25, 45, 50, 85, 145, 202 ]

let target = 145

function orderAgnostic(arr, target){

    // calculating the mid
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor( (start + end) / 2 );

    /** 
     * comparing the first value and last value 
     * to determine if the 
     * array is in ascending order or descending order
    */

    let asc;

    if( arr[start] < arr[end] ){

        asc = true;

    }else{

        asc= false;

    }

    while( start <= end){

        if( arr[mid] === target ){
            return ` Data found on ${mid} `;   
        }

        if(asc){
            if( arr[mid] < target ){
                start = mid + 1;
                mid = Math.floor( (start + end) / 2 );
            }
            else{
                end = mid - 1; 
                mid = Math.floor( (start + end) / 2 );
            }
        }else{
            if( arr[mid] > target ){
                start = mid + 1;
                mid = Math.floor( (start + end) / 2 );
            }
            else{
                end = mid - 1; 
                mid = Math.floor( (start + end) / 2 );
            }
        }

    }

    return 'Data not found'
}  


console.log(orderAgnostic(arr, target));