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
      test('Prime factors of 4 should return [2,2]', () => {
        // arrange and act
        var result = primeFactors(4); 
        // assert
        expect(result).toStrictEqual([2,2]);
      });
      test('Prime factors of 5 should return [5]', () => {
        // arrange and act
        var result = primeFactors(5); 
        // assert
        expect(result).toStrictEqual([5]);
      });
      test('Prime factors of 6 should return [2,3]', () => {
        // arrange and act
        var result = primeFactors(6); 
        // assert
        expect(result).toStrictEqual([2,3]);
      });
      test('Prime factors of 7 should return [7]', () => {
        // arrange and act
        var result = primeFactors(7); 
        // assert
        expect(result).toStrictEqual([7]);
      });
      test('Prime factors of 8 should return [2,2,2]', () => {
        // arrange and act
        var result = primeFactors(8); 
        // assert
        expect(result).toStrictEqual([2,2,2]);
      });
   })

