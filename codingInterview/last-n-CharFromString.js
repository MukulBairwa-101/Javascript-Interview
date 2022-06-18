// last n characters from a string

let str = 'javascript';

const lastNChar =()=>{
    // return str.substring(str.length - 3, str.length);

    // or 
    return str.slice(-3);
}


console.log(lastNChar());