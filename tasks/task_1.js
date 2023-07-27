// string length counter

export const strLength = (String) => {
  const result = String.length;
  for (let i = 0; i < result; i++) {
    if (i > 10) {
      return 'string is greater than 10';
    }
  }

  return result;
};

// const a = 'you are the best';
// console.log(strLength(a));
