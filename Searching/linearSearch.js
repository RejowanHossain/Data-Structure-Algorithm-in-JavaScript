
let arr = [1, 50, 45, 85, 202, 145, 25]

let target = 145

function linearSearch(arr, target){
    for( let i = 0; i < arr.length; i++ ){
        
        if(arr[i] === target){
            return `Data Found at ${ i }`
        }
    }
    return 'Data not found'
}

console.log(linearSearch(arr, target));