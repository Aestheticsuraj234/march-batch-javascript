
### Rest Operator (`...`)

The rest operator (`...`) is used to gather elements into an array or properties into an object.

#### With Arrays:

**1. Gathering Remaining Parameters into an Array:**
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
```

**2. Destructuring Arrays:**
```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
```

**3. Ignoring Some Elements:**
```javascript
const [a, b, , ...rest] = [1, 2, 3, 4, 5];
console.log(a);    // Output: 1
console.log(b);    // Output: 2
console.log(rest); // Output: [4, 5]
```

#### With Objects:

**1. Gathering Remaining Properties into an Object:**
```javascript
const person = {
  name: 'John',
  age: 30,
  country: 'USA',
  profession: 'Engineer'
};

const { name, age, ...details } = person;
console.log(name);    // Output: John
console.log(age);     // Output: 30
console.log(details); // Output: { country: 'USA', profession: 'Engineer' }
```

**2. Using Rest Parameter with Object Destructuring:**
```javascript
const book = {
  title: 'JavaScript Cookbook',
  author: 'John Doe',
  year: 2022,
  publisher: 'PublisherX'
};

const { title, ...rest } = book;
console.log(title); // Output: JavaScript Cookbook
console.log(rest); // Output: { author: 'John Doe', year: 2022, publisher: 'PublisherX' }
```

**3. Ignoring Specific Properties:**
```javascript
const product = {
  name: 'Laptop',
  price: 1200,
  category: 'Electronics',
  manufacturer: 'BrandX'
};

const { price, ...rest } = product;
console.log(price); // Output: 1200
console.log(rest);  // Output: { name: 'Laptop', category: 'Electronics', manufacturer: 'BrandX' }
```

### Spread Operator (`...`)

The spread operator (`...`) is used to expand elements of an iterable into places where multiple elements are expected.

#### With Arrays:

**1. Combining Arrays:**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
```

**2. Copying Arrays:**
```javascript
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // Output: [1, 2, 3]
```

**3. Passing Arguments to Functions:**
```javascript
function multiply(x, y, z) {
  return x * y * z;
}

const args = [2, 3, 4];
console.log(multiply(...args)); // Output: 24
```

#### With Objects:

**1. Cloning an Object:**
```javascript
const original = { x: 1, y: 2 };
const clone = { ...original };
console.log(clone); // Output: { x: 1, y: 2 }
```

**2. Merging Objects:**
```javascript
const defaults = { theme: 'light', fontSize: 14 };
const userPrefs = { fontSize: 16 };
const merged = { ...defaults, ...userPrefs };
console.log(merged); // Output: { theme: 'light', fontSize: 16 }
```

**3. Adding Properties to an Object:**
```javascript
const person = { name: 'Alice' };
const extendedPerson = { ...person, age: 30, country: 'Canada' };
console.log(extendedPerson); // Output: { name: 'Alice', age: 30, country: 'Canada' }
```

