// const user: (string | number)[] = [1, 'pavel']; // OK
// const user2: (string | number)[] = ['pavel', 1]; // OK

// Tuples - Array Order is IMPORTANT
// Use Case: 1
let tUser: [string, number, boolean];

tUser = ['pavel', 1, true]; // OK
// user = [1, 'pavel', true]; // Error Here
// user = [true, 1, 'pavel']; // Error Here

// Use Case: 2
let rgb: [number, number, number] = [255, 255, 255];

// Use Case: 3
type User = [number, string];

const newUser: User = [112, 'pavel']; // OK
// const newUser2: User = ['pavel', 112]; // Error Here
