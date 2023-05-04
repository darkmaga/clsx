type Args =
  | null
  | string
  | number
  | boolean
  | Record<string, boolean | string | null>
  | Args[]

const cn = (...args: Args[]): string => {
  let resultString: string = ''

  for (let currentArgument of args) {
    if (typeof currentArgument === 'string') {
      resultString += `${resultString === '' ? '' : ' '}${currentArgument}`

      continue
    }

    if (
      typeof currentArgument === 'object' &&
      currentArgument !== null &&
      !Array.isArray(currentArgument)
    ) {
      for (let objectKey in currentArgument) {
        if (!currentArgument[objectKey]) continue

        resultString += `${resultString === '' ? '' : ' '}${objectKey}`
      }
    }

    if (Array.isArray(currentArgument)) {
      for (let arrayElement of currentArgument) {
        if (!arrayElement) continue

        const nextString = cn(arrayElement)

        if (!nextString) continue

        resultString += `${resultString === '' ? '' : ' '}${nextString}`
      }
    }
  }

  return resultString
}

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
console.log(
  cn(
    'foo',
    [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]],
    'cya'
  )
)
//=> 'foo bar hello world cya'
