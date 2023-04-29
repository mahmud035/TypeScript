function detectType(value: number | string) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }

  return value + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log('Please provide ID');
    return;
  }
  return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    // NOTE: typeof array is 'object'
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}
