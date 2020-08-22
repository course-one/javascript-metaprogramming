// return information of a function
function funcInfo( func ) {
    return `Function "${ func.name }" accepts "${ func.length }" arguments.`;
}

// define sample functions
var add = ( a, b ) => a + b;
var sayHello = () => 'Hello World!';

// print function information
console.log( 'add info ->', funcInfo( add ) );
console.log( 'sayHello info ->', funcInfo( sayHello ) );