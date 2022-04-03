const primeFactors = require('./PrimeFactors');
describe("Prime factors", () => {
    test('Prime factors of 1 should return empty array', () => {
      // arrange and act
      var result = primeFactors(1); 
      // assert
      expect(result).toStrictEqual([]);
    });
   })