// defines a matcher object to `match` operation
class Matcher {
    constructor( name, ends ) {
        this.name = name.toUpperCase();
        this.ends = ends;
    }

    // `String.prototype.match()` processor
    [ Symbol.match ]( text ) {
        const pattern = this.ends + this.name + this.ends;
        return text.match( new RegExp( pattern, 'gi' ) );
    }
}

// create a matcher to match `__EMAIL__` pattern
const matcher = new Matcher( 'email', '__' );

/*------*/

// sample text
const text = 'Enter your email address here: __EMAIL__ and provide an alternate email here: __EMAIL__';

console.log( text.match( matcher ) );