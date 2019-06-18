console.log('hello');

// object literal

const baseballHat = {
    type: 'cap',
    color: 'black',
    size:'XL',

}

const sunHat = {
    type: 'sun',
    color: 'yellow',
    size: 'L',

}
// a variable (changeable or unchangeable) that has multiple 'properties'

console.log('baseballHat', baseballHat);

console.log(`The baseball hat is: ${baseballHat.color} in size ${baseballHat.size}`);

// const w' objects
    
console.log('before setting size:', sunHat);

//can i do this??
sunHat.size = 'XL';

console.log('after setting size:', sunHat);

// can do this, because object PROPERTIES are mutable, but you cannot change the given properties if 
// object is established as a const variable instead of a let variable.

//can't set to another object ex. below
/* sunHat ={
    type: 'sun',
    color: 'yellow',
    size: 'L',
}*/

let penguins = [
    {
        name: 'Emperor',
        colors: ['Black', 'White', 'Yellow'],
        size: 1.0,
        isCute: true
    },
    {
        name: 'Little',
        colors: ['Slate-blue', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Rockhopper',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.75,
        isCute: true
    },
    {
        name: 'African',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Gentoo',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Sea Gull',
        colors: ['Gray'],
        size: 0.25,
        isCute: false
    },
    {
        name: 'Chinstrap',
        colors: ['Black', 'White'],
        size: 0.25,
        isCute: true
    },
    {
        name: 'Macaroni',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.5,
        isCute: true
    },
];


function cuteCheck(inputArray) {

    let outputArray = [];               // when defining a variable within a function, that variable will not exist outside of the function it is 'created' in : can be reused.

    for( let thing of inputArray ){
                                        // considered the more direct method when using objects > for x Of x loop
    console.log('a thing', thing);
   
    if (thing.isCute === true) {        // technically don't need the equivalancy check since value is true/false
   
    outputArray.push(thing);
   
}

}

// for (let i=0; i<inputArray.length; i++ ){
//     let thing = inputArray[i];
//     if ( thing.isCute === true ) {                          //
//         outputArray.push(thing);
//     }
// }

return outputArray;

}
  

console.log('we have cute ones!', cuteCheck(penguins));

//Object constructor functions

function Hat(myType, myColor, mySize) {
    this.type = myType;
    this.color = myColor;                 // 'this.etc' signifies which object property is being accessed
    this.size = mySize;
}

const fancyHat = new Hat('fancy', 'gold', 'M');  // uses 'new' object constructor function. in this application it is saying 'make this object using this function'. capitalization must match; either lower or uppercase.

console.log(fancyHat);  // convention says that object variables should be capitalized to signify increased importance


