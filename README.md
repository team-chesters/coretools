# CoreTools

CoreTools is a JavaScript utility library inspired by developer experience and [lodash](https://github.com/lodash/lodash). It provides a collection of commonly used utility functions that developers need in their daily work, organized into logical categories for better maintainability and tree-shaking support.

## Why CoreTools?
* Easy Data Type Conversion
* Reduces development hassle
* Lightweight and fast
* Modular architecture with tree-shaking support
* Lodash-style chaining API
* Category-based organization for better developer experience


## CoreTools should
* Increase reusability
* Be clean & readable
* Be easy to debug
* Be maintainable
* Be modular
* Have unit tests for all modules
* Work on multiple environments (IE11+ with Modern Browser)
* Be compatible with other frameworks or libraries

## CoreTools shouldn't be
* UI Components.
* CSS Selector Engine or simliar code.
* Template Engine
* Anything that could be separate libraries.
* Anything that isn't modular libraries.

## Installation

### Browser (UMD)
```html
<script src="./dist/coretools.umd.js"></script>
<script>
  // Use coretools functions
  const result = coretools.isArray([1, 2, 3]); // true
  const unique = coretools.GetUnique([1, 2, 2, 3]); // [1, 2, 3]
</script>
```

### NPM/Yarn
```shell
$ npm install coretools 
# or
$ yarn add coretools
```

## Usage

### Default Import (Full Library)
```js
import coretools from 'coretools'

// Use with chaining API
const result = coretools(data).isArray().isEmpty().value()

// Or use individual functions
const isArray = coretools.isArray
const isEmpty = coretools.isEmpty
```

### Named Imports (Tree-shaking)
```js
// Import specific functions
import { isArray, isEmpty } from 'coretools'

// Or import by category
import { isArray, GetUnique } from 'coretools/src/array'
import { isNumber, FormatBytes } from 'coretools/src/number'
import { GetAge, GetTomorrow } from 'coretools/src/date'
```

### Category-based Imports
```js
// Import entire categories
import array from 'coretools/src/array'
import date from 'coretools/src/date'
import string from 'coretools/src/string'

// Use category functions
const unique = array.GetUnique([1, 2, 2, 3])
const tomorrow = date.GetTomorrow()
const padded = string.pad(5, 3)
```

## Available Categories

- **array**: Array manipulation and validation (7 functions)
- **async**: Asynchronous utilities (2 functions)
- **color**: Color-related utilities (1 function)
- **convert**: Data type conversion (2 functions)
- **date**: Date calculation and manipulation (31 functions)
- **file**: File and path utilities (2 functions)
- **number**: Number validation and formatting (7 functions)
- **object**: Object manipulation and validation (11 functions)
- **random**: Random value generation (3 functions)
- **string**: String manipulation and validation (13 functions)
- **time**: Time calculation and conversion (6 functions)
- **timestamp**: Timestamp conversion and validation (4 functions)
- **type**: Type checking utilities (1 function)

## Examples

### Array Operations
```js
import { GetUnique, isArray, isValidIndex } from 'coretools'

const data = [1, 2, 2, 3, 4, 4, 5]
if (isArray(data)) {
    const unique = GetUnique(data) // [1, 2, 3, 4, 5]
    const hasIndex = isValidIndex(data, 2) // true
}
```

### Date Operations
```js
import { GetTomorrow, GetAge, isDate } from 'coretools'

const tomorrow = GetTomorrow()
const age = GetAge(new Date('1990-01-01'))
const isValid = isDate(new Date()) // true
```

### String Operations
```js
import { pad, Len, EscapeHTML } from 'coretools'

const padded = pad(5, 3) // "005"
const length = Len("Hello") // 5
const escaped = EscapeHTML("<div>") // "&lt;div&gt;"
```

### Chaining API (Lodash-style)
```js
import coretools from 'coretools'

const result = coretools(data)
    .isArray()
    .isEmpty()
    .value()
```

### Browser UMD Usage
```html
<!DOCTYPE html>
<html>
<head>
    <title>CoreTools UMD Example</title>
</head>
<body>
    <script src="./dist/coretools.umd.js"></script>
    <script>
        // Direct function usage
        console.log(coretools.isArray([1, 2, 3])); // true
        console.log(coretools.GetUnique([1, 2, 2, 3])); // [1, 2, 3]
        console.log(coretools.GetTomorrow()); // tomorrow's date
        
        // Chaining API
        const result = coretools([1, 2, 3])
            .isArray()
            .value();
        console.log(result); // [1, 2, 3]
    </script>
</body>
</html>
```

## Development

### Building UMD Files
To build UMD files for browser usage:

```shell
# Install dependencies
npm install
# or
yarn install

# Build UMD and ES modules
npm run build
# or
yarn build
```

This will generate:
- `dist/coretools.umd.js` - UMD format for browser usage
- `dist/coretools.es.js` - ES module format

### Features
This is the **develop branch** of CoreTools, featuring:
- Modular architecture with category-based organization
- Lodash-style chaining API
- Tree-shaking support for optimal bundle sizes
- Comprehensive function coverage (88+ utility functions)
- UMD support for browser environments

## Documentation

Online documentation will be written on a [Github Wiki](https://github.com/team-chesters/coretools/wiki)[^1][^2].

~~Documentation is work in progress.~~

## License
MIT

[^1]: You can check the description and usage in each function code in the `src` folder.

[^2]: The test code for each function can be found in the `test` folder.