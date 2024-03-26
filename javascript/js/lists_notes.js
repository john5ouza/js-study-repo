const names = [ "John", "Souza", "Cunha", "Arthur" ];

const john = names[0];
console.log( john );

names.push( "JoJo" );
console.log( names );

names.unshift( "Lucas" );
console.log( names )

console.log( names.indexOf( "John" ));
console.log( names.sort() );
console.log( names.length );

const namesIsArray = Array.isArray(names);
console.log( namesIsArray );