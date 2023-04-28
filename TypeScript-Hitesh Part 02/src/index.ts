class User {
  email: string;
  name: string;
  city: string = '';

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const pavel = new User('pavel@.com', 'pavel');

console.log(pavel);
