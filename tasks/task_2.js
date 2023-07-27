export const reverseString = (String) => {
  let result = '';

  for (let i = String.length - 1; i >= 0; i--) {
    result += String[i];
  }
  return result;
};

const a = 'you are the best';
console.log(reverseString(a));
