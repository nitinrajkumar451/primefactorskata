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
      test('Prime factors of 9 should return [3,3]', () => {
        // arrange and act
        var result = primeFactors(9); 
        // assert
        expect(result).toStrictEqual([3,3]);
      });
      test('Prime factors of 10 should return [2,5]', () => {
        // arrange and act
        var result = primeFactors(10); 
        // assert
        expect(result).toStrictEqual([2,5]);
      });
      test('Prime factors of 2*5*6*8*27*11*13 should return [2,2,2,2,2,3,3,3,3,5,11,13]', () => {
            var result = primeFactors(2*5*6*8*27*11*13); 
            expect(result).toStrictEqual([2,2,2,2,2,3,3,3,3,5,11,13]);
      });
      test('Prime factors of "a" should return "Input must be a finite integer greater than or equal to 1"', () => {
          var result = primeFactors('a'); 
          expect(result).toStrictEqual("Input must be a finite integer greater than or equal to 1");
      });
      test('Prime factors of "a" should return "Input must be a finite integer greater than or equal to 1"', () => {
        var result = primeFactors(1/0); 
        expect(result).toStrictEqual("Input must be a finite integer greater than or equal to 1");
    });
    test('Prime factors of "a" should return "Input must be a finite integer greater than or equal to 1"', () => {
        var result = primeFactors(-1); 
        expect(result).toStrictEqual("Input must be a finite integer greater than or equal to 1");
    });
   })

