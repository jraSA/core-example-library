import myHelloWorldFunction from './myHelloWorldFunction';

describe('myHelloWorldFunction simple test', () => {
  it.each`
    input      | expected
    ${'jorge'} | ${'Hello jorge!!'}
    ${'Maria'} | ${'Hello Maria!!'}
  `(
    'WHEN I call myHelloWorldFunction WITH $input THEN  I receive "$expected"',
    ({ input, expected }) => {
      expect(myHelloWorldFunction(input)).toBe(expected);
    }
  );
});
