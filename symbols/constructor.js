// create some symbols
var sym1 = Symbol();
var sym2 = Symbol();
var sym3 = Symbol('apple');
var sym4 = Symbol('apple');

// type check
console.log( '"typeof sym1" =>',  typeof sym1 );
console.log( '"typeof sym3" =>',  typeof sym3 );

// equality check
console.log( '"sym1 === sym2" =>',  sym1 === sym2 );
console.log( '"sym1 == sym2" =>',  sym1 == sym2 );
console.log( '"sym3 === sym4" =>',  sym3 === sym4 );
console.log( '"sym1 === sym2" =>',  sym1 === sym2 );
console.log( '"sym1 === sym1" =>',  sym1 === sym1 );

// logging a symbol
console.log( '"sym1" =>', sym1 );
console.log( '"sym3" =>', sym3 );