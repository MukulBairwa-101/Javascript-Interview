// undefined - a variable that  has not been assigned a value
// null - intentional absence of ant object value ,also a  falsy values in js
// let number = null;   -- number is empty but may have value later


console.log(typeof undefined);
console.log(typeof null);
console.log(typeof NULL);
console.log(typeof typeof 1);  


// typeof 1 is number  then typeof number is string


// object => array 

let user ={  name:'john',role:'Software Engineer'};

    //  3 methods are there 
    // -------------------------------------------
    
    // Object.keys() - return an array of keys of passed object  
    // Object.values() - return an array of values of corresponding keys in passed object 
    // Object.entries() - return an array of key-value pair of passed object   

console.log(Object.entries(user));

// array => object 

let user2 =[ 'name','max','role','Bio-tech Engineer'];
// let convertedObj = Object.entries(user2)

    //  3 methods are there 
    // -------------------------------------------
    
    // Object.assign({},array) - return an  object of passed array
    // spread operator -  {...array}
    // Object.fromEntries(array) - 

console.log({...user2});

