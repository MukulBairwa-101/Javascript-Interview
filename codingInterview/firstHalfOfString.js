function firstHalf(a) {
    let beg = 0 ;
    let end = a.length;
     
    let avg = Math.floor((beg+end)/2);
    return a.slice(beg,avg);
    
 }

 console.log(firstHalf());



 function myFunction(a) {
    return a.slice(0, a.length / 2);
 }