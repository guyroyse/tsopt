# Optional

A TypeScript library for optional values, providing a simple and type-safe way to handle optional values in your code. Inspired by Java's Optional class.

## Installation

Install in the usual way:

```sh
npm install @guyroyse/optional --save
```

## Quick Start

```typescript
import Optional from '@guyroyse/optional'

// You've read some data. Is it null? ¯\_(ツ)_/¯
const hello: string | null = readHello()

// Make it an optional!
const maybeHello = Optional.ofNullable<string>(hello)

// You can check if a value is present and get it.
if (maybeHello.isPresent()) {
  const certainlyHello = maybeHello.get()
}

// Or you can provide a default value for it.
const maybeNotHello = maybeHello.orElse('Goodbye')
```

## Usage

There are three ways to create an Optional. You can explicitly create it with a value, create it as an empty value (i.e. null), or create it with a value that might be null.

```typescript
// creates an optional with the given value, throws an error if a nullish value is passed in
const some = Optional.of<number>(42)

// creates an optional explicitly set to null
const none = Optional.empty<number>()

// creates an optional from an unknown value
const maybe = Optional.ofNullable<number>(nullishOrNumber)
```

Once you have an Optional, you have a few choices:

```typescript
// check if it is null or not
const status = maybe.isPresent() ? 'it there' : 'it null'
const status = maybe.isEmpty() ? 'it null' : 'it there'

// gets the value, throws an exception if null
const value = maybe.get()

// gets the value, providing a default if it is null
const value = maybe.orElse(23)

// gets the value, throwing a specific exception if it is null
const value = maybe.orElseThrow(new MyError())

// call a function if it is null or not
maybe.ifPresent(() => console.log('it there'))
maybe.ifEmpty(() => console.log('it null'))
```

## Contributing

Feel free to send PRs for bugs or new features. Or open an issue and make me do it!
