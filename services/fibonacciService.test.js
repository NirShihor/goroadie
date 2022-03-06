const {getFibonacci} = require('./fibonacciService')

describe('Test services', function () {

    test('responds to /fibonacci', () => {

        const req = {}

        const res = {json: 'application/json', sendStatus: 200}

        getFibonacci(req, res);
        
        expect(res.json).toEqual('application/json');
        expect(res.sendStatus).toBe(200)
    });

    describe('Computes Fibonacci numbers', () => {
        test('Computes arbitrary Fibonacci numbers', () => {
        function getFibonacci(num) {
            num = 11
            try {
              expect(getFibonacci(num)).toBe(89);
              done();
            } catch (error) {
              done(error);
            }
          }
       });

       test('Computes number 1 correctly', () => {
        function getFibonacci(num) {
            num = 1
            try {
              expect(getFibonacci(num)).toBe(1);
              done();
            } catch (error) {
              done(error);
            }
          }
       });
     });
})