// string length counter

export const strLength = (String) => {
  const result = String.length;

  if (typeof String !== 'string') {
    throw new Error('Input must be a string');
  }

  if (result<= 1 || result > 10) {
    throw new Error('String length must be between 1 and 10 characters');
  }



  return result;
};

// const a = 'you are the best';
// console.log(strLength(a));
