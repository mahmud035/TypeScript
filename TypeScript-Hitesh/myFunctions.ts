function addTwo(num: number): number {
  return num + 2;
}

console.log(addTwo(5));

function getUpper(value: string): string {
  return value.toUpperCase();
}

console.log(getUpper('10'));
console.log(getUpper('pavel'));

function signUpUser(name: string, email: string, isPaid: boolean) {
  // console.log(`${name} ${email} ${isPaid}`);
}

console.log(signUpUser('pavel', 'pavel@gmail.com', false));

// provide default value
const loginUser = (name: string, email: string, isPaid: boolean = false) => {
  // console.log(`${name} ${email} ${isPaid}`);
};

console.log(loginUser('pavel', 'pavel@gmail.com'));
