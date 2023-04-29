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
