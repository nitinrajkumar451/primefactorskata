const primeFactors = require('./PrimeFactors');
describe("Prime factors", () => {
    test('Prime factors of 1 should return empty array', () => {
      // arrange and act
      var result = primeFactors(1); 
      // assert
      expect(result).toStrictEqual([]);
    });
    test('Prime factors of 2 should return [2]', () => {
        // arrange and act
        var result = primeFactors(2); 
        // assert
        expect(result).toStrictEqual([2]);
      });
      test('Prime factors of 3 should return [3]', () => {
        // arrange and act
        var result = primeFactors(3); 
        // assert
        expect(result).toStrictEqual([3]);
      });
   })

