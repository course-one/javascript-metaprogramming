eval(`
  function sayHello() {
    console.log( "Hello World" );
  }
`);

// call `sayHello` function as if it is defined
sayHello();

/*------*/

// dynamic function generator
function generator( a, b, opeation ) {
    if( opeation === 'ADD' ) {
        return eval( "() => a + b" );
    } else {
        return eval( "() => a - b" );
    }
}

const operate = generator(5, 3, 'ADD');
console.log( "operate() =>", operate() );