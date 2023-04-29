const score: Array<number> = [];
const names: Array<string> = [];

function identifyOne(value: boolean | number): boolean | number {
  return value;
}

function identifyTwo(value: any): any {
  return value;
}

function identifyThree<Type>(value: Type): Type {
  return value;
}

identifyThree('pavel');
identifyThree(true);

function identifyFour<T>(value: T): T {
  return value;
}

interface Bootle {
  brand: string;
  type: number;
}

// identifyFour<Bootle>({})

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[3];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 3;
  return products[3];
};
