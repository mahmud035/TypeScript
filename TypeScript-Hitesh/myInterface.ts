interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

const pavel: User = {
  dbId: 1,
  email: 'pavel@.com',
  userId: 112,
  startTrail: () => {
    return 'trail started';
  },
  getCoupon: (name: 'pavel10', off: 10) => {
    return 10;
  },
};

pavel.email = 'pavel@gmail.com';
// pavel.dbId = 222; // Error Here
