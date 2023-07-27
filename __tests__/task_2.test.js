import { reverseString } from '../tasks/task_2.js';

test('return the reverse of a string', (String) => {
  expect(reverseString(String).toMatch(String.reverse()));
});
