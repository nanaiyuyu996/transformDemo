import {transform} from '../src/transform';

test('error from Chrome should be processed correctly', () => {
  const errorInfo = `TypeError: Error raised
    at bar http://192.168.31.8:8000/c.js:2:9`;
  const result = {
    message: ' Error raised',
    stack: [
      {
        line: 2,
        column: 9,
        filename: 'http://192.168.31.8:8000/c.js'
      }
    ]
  };
 
  const drink = jest.fn(transform);
 
  drink(errorInfo);
  expect(drink).toHaveReturnedWith(result);
});

test('error from Firefox should be processed correctly', () => {
  const errorInfo = `TypeError: Error raised
                     <anonymous>:1:11
                     `;
  const result = {
    message: ' Error raised',
    stack: []
  };
  const drink = jest.fn(transform);

  drink(errorInfo);
  expect(drink).toHaveReturnedWith(result);
});


test('it should be ignore if there is no filename', () => {
  const errorInfo = `bar@http://192.168.31.8:8000/c.js:2:9`;
  const result = {
    message: '',
    stack: [
      {
        line: 2,
        column: 9,
        filename: 'http://192.168.31.8:8000/c.js'
      }
    ]
  };
  const drink = jest.fn(transform);

  drink(errorInfo);
  expect(drink).toHaveReturnedWith(result);
});
