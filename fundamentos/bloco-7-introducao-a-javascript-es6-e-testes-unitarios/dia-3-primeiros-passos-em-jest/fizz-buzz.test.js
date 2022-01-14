const myFizzBuzz = require('./fizz-buzz');

describe('Retorna "fizzbuzz" se o número for divisível por 3 e 5 ', () => {
    it('Retorno esperado fizzbuzz para 25', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('Retorno esperado fizz para 3', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });

    it('Retorno esperado buzz para 5', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });

    it('Retorno esperado qualquer numero que não é divisivel por 3 e 5', () => {
        const num = 13;
        expect(myFizzBuzz(num)).toBe(num);
    });

    it('Retorno esperado para NaN', () => {
        expect(myFizzBuzz('r')).toBe(false);
    });
});