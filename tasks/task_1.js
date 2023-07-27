// string length counter

export const strLength = (string) => {
 

  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }
  if (string === '') {
    throw new Error('String is empty');
  }

  if (string.length > 10) {
    throw new Error('String longer than 10 characters');
  }
 let result = string.length;
  return result;
};


