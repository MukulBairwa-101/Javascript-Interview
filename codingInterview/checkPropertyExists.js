// check if property exists in object

let a={name:'john',age:35}



const checkProperty =(name)=>{
    // return a.hasOwnProperty(name);
    //or
    return name in a ;
}

console.log(checkProperty('name'));