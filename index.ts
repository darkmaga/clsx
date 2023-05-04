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
      for (let objectKey of Object.keys(currentArgument)) {
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
