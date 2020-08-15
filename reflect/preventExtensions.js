var person = { name: 'Ross' };

// check if `person` is extensible
console.log( 'before ->', Reflect.isExtensible( person ) );

// make `person` non-extensible
console.log( 'op ->', Reflect.preventExtensions( person ) );

// check if `person` is extensible
console.log( 'after ->', Reflect.isExtensible( person ) );