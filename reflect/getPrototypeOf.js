class Person{}

var str = new String();
var obj = {};
var person = new Person();

// get prototype of object using `Reflect`
console.log( 'str ->', Reflect.getPrototypeOf( str ) );
console.log( 'obj ->', Reflect.getPrototypeOf( obj ) );
console.log( 'person ->', Reflect.getPrototypeOf( person ) );