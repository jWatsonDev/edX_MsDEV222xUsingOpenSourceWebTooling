describe('mathService', function () {
    it('add is defined', function () {
        expect(mathService.add).toBeDefined();
    });
    it('should add', function () {
        var first = 3;
        var second = 5;

        var expected = first + second;
        var actual = mathService.add(first, second);

        expect(expected).toBe(actual);
      });
});

describe('mathService', function () {
    it('subtract is defined', function () {
        expect(mathService.add).toBeDefined();
    });
    it('should subtract', function () {
        var first = 5;
        var second = 3;

        var expected = first - second;
        var actual = mathService.subtract(first, second);

        expect(expected).toBe(actual);
      });
});

describe('mathService', function () {
    it('multiply is defined', function () {
        expect(mathService.multiply).toBeDefined();
    });
    it('should multiply', function () {
        var first = 5;
        var second = 3;

        var expected = first * second;
        var actual = mathService.multiply(first, second);

        expect(expected).toBe(actual);
      });
});

describe('mathService', function () {
    it('divide is defined', function () {
        expect(mathService.divide).toBeDefined();
    });
    it('should divide', function () {
        var first = 9;
        var second = 3;

        var expected = first / second;
        var actual = mathService.divide(first, second);

        expect(expected).toBe(actual);
      });
});

describe('mathService', function () {
    it('squareRoot is defined', function () {
        expect(mathService.squareRoot).toBeDefined();
    });
    it('should squareRoot', function () {
        var first = 16;

        var expected = Math.sqrt(first);
        var actual = mathService.squareRoot(first);

        expect(expected).toBe(actual);
      });
});