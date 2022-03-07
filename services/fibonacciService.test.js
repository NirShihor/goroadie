const {getFibonacci} = require('./fibonacciService')
// TEMP
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
              expect(getFibonacci(num)).toBe(89);
              done();
          }
       });

       test('Computes number 1 correctly', () => {
        function getFibonacci(num) {
            num = 1
              expect(getFibonacci(num)).toBe(1);
              done();
          }
       });
     });
})