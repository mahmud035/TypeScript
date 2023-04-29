let helloWord = 'hello world';

interface User {
  name: string;
  id: number;
}

const user: User = {
  name: 'John',
  id: 1,
};

class UserAccount {
  constructor(public name: string, public id: number) {}
}

const user2 = new UserAccount('Murphy', 1);

type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length;
}
