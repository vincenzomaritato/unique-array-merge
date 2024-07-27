# unique-array-merge

A lightweight JavaScript library to create an array of unique values, in order, from multiple input arrays.

## Features

- Combines multiple arrays into one array of unique values
- Maintains the order of values as they appear in their source arrays
- Simple and intuitive function

## Installation

You can install this library using npm:

```sh
npm install unique-array-merge
```

## Usage

Here's how you can use unique-array-merge in your project:

### JavaScript

```javascript
import uniqueArrayMerge from "unique-array-merge";

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const result = uniqueArrayMerge(array1, array2);

console.log(result); // [1, 2, 3, 4, 5]
```

### TypeScript

```typescript
import uniqueArrayMerge from "unique-array-merge";

const numberArray1: number[] = [1, 2, 3];
const numberArray2: number[] = [3, 4, 5];
const result1 = uniqueArrayMerge(numberArray1, numberArray2);
console.log(result1); // [1, 2, 3, 4, 5]

const stringArray1: string[] = ["a", "b", "c"];
const stringArray2: string[] = ["c", "d", "e"];
const result2 = uniqueArrayMerge(stringArray1, stringArray2);
console.log(result2); // ['a', 'b', 'c', 'd', 'e']
```

## API

`uniqueArrayMerge(...arrays)`

#### Parameters:

`...arrays` (`Array<T[]>`): The arrays to merge.

#### Returns:

`Array<T>`: The array of unique values.

#### Example:

```javascript
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const result = uniqueArrayMerge(array1, array2);
console.log(result); // [1, 2, 3, 4, 5]
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
