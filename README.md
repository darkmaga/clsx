# Simple classnames merge library for React

```ts
// Strings (variadic)
console.log(cn('foo', true && 'bar', 'baz'))
//=> 'foo bar baz'

// Objects
console.log(cn({ foo: true, bar: false, baz: true }))
//=> 'foo baz'

// Objects (variadic)
console.log(cn({ foo: true }, { bar: false }, null, { '--foobar': 'hello' }))
//=> 'foo --foobar'

// Arrays
console.log(cn(['foo', 0, false, 'bar']))
//=> 'foo bar'

// Arrays (variadic)
console.log(cn(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]]))
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
console.log(cn('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya'))
//=> 'foo bar hello world cya'

```