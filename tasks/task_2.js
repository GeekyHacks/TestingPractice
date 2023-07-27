export const reverseString = (String) => {
  let result = '';
  if (typeof String !== 'string') {
    throw new Error('Input must be a string');
  }
  if ( String === '') {
    throw new Error('String is empty');
  }
  for (let i = String.length - 1; i >= 0; i--) {
    result += String[i];
  }
  return result;
};

const a = 'you are the best';
console.log(reverseString(a));
