class Student {
    constructor( fname, lname, score ) {
        this.name = fname + ' ' + lname;
        this.score = score;
    }

    toString() {
        return `Student ${ this.name } scored ${ this.score } marks.`;
    }
}

class Player {
    constructor( name, score ) {
        this.name = name;
        this.score = score;
    }

    toString() {
        return `Player ${ this.name } scored ${ this.score } points.`;
    }
}

// create instances of `Student` and `Player`
console.log( `ross -> ${ Reflect.construct(
    Student, [ 'Ross', 'Geller', 90 ]
) }` );
console.log( `monica -> ${ Reflect.construct(
    Player, [ 'Monica', 95 ]
) }` );

// create instance of `Player` with `Student` constructor
console.log( `jack -> ${ Reflect.construct(
    Student, [ 'Jack', 'Geller', 99 ], Player
) }` );