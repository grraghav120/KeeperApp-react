let allNumbers=new Set([1,4,5,7,5,9,2]);
console.log(allNumbers);
let newArray=Array.from(allNumbers);
console.log(newArray);

function quicksortArray(arr){
    let n=arr.length;
    if(n<=1) return arr;
    let pivot=arr[0];
    let left=[];
    let right=[];
    for(let i=1;i<n;i++){
        if(arr[i]<pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quicksortArray(left),pivot,...quicksortArray(right)];
}

let arr=quicksortArray(newArray);
console.log(arr);