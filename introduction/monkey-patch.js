// add `toStartCase` method to `string`s
String.prototype.toStartCase = function() {
    let [ first, ...rest ] = this;
    return first.toUpperCase() + rest.join( '' );
}

// modify `toLowerCase` method of `string`s
String.prototype.toLowerCase = function() {
    return null; // not allowed
}

// convert `hello` string to start case
var hello = 'hello world';
console.log( hello.toStartCase() );
console.log( hello.toLowerCase() );