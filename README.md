# Simple classnames merge library for React

```ts
// Strings (variadic)
cn('foo', true && 'bar', 'baz')
//=> 'foo bar baz'

// Objects
cn({ foo: true, bar: false, baz: true })
//=> 'foo baz'

// Objects (variadic)
cn({ foo: true }, { bar: false }, null, { '--foobar': 'hello' })
//=> 'foo --foobar'

// Arrays
cn(['foo', 0, false, 'bar'])
//=> 'foo bar'

// Arrays (variadic)
cn(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]])
//=> 'foo bar baz hello there'

// Kitchen sink (with nesting)
cn('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya')
//=> 'foo bar hello world cya'

```