const sum = require('./sum');

describe('Test função sum', () => {

    it('Soma de 4 e 5 igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('Soma de 0 é 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('Teste de error', () => {
        expect(() => {sum()}).toThrow();
    });

    it('Teste se mensagem de erro é parameters must be numbers', () => {
        expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
    });

});