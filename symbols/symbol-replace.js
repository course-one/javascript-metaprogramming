// defines a matcher object for `replace` operation
class Matcher {
    constructor( name, ends ) {
        this.name = name.toUpperCase();
        this.ends = ends;
    }

    // `String.prototype.replace()` processor
    [ Symbol.replace ]( text, replacement ) {
        const pattern = this.ends + this.name + this.ends;
        const matchIndex = text.indexOf( pattern );

        return text.substring( 0, matchIndex ) + `"${ replacement }"` + text.substring( matchIndex + pattern.length, text.length );
    }
}

// create a matcher to replace `__EMAIL__` pattern
const matcher = new Matcher( 'email', '__' );

/*------*/

// sample text
const text = 'Enter your email address here: __EMAIL__.';
console.log( text.replace( matcher, 'a@b.com' ) );