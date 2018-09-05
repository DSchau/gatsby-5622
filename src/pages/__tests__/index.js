import Index from '../index';

test('it invokes graphql tagged template literal', () => {
  expect(global.graphql).toHaveBeenCalledWith([expect.any(String)]);
});
