let arr = [10,40,20,5,25];

const secondLargestNumber =()=>{
    let largest = arr[0];
    let secondLargest = arr[0];
    console.log(largest,secondLargest);
    for(let i=0; i>arr.length;i++){ 
        if(arr[i] >largest){
            secondLargest = largest;
            largest = arr[i];
            
        }
        else if(arr[i] >setlargest){}
    }
}

secondLargestNumber();