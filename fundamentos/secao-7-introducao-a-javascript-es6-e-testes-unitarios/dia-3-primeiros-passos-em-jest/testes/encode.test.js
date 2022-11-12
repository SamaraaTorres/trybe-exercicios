const { encode, decode } = require('../scripts/encode');

describe('Para as funções encode e decode verifique se tem o retorno esperadoo', () => {
    it('teste se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    })
    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        const vogais = 'a, e, i, o, u';
        const code = '1, 2, 3, 4, 5';
        expect(encode(vogais)).toBe(code);
    })
    it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
        const vogais = 'a, e, i, o, u';
        const code = '1, 2, 3, 4, 5';
        expect(decode(code)).toBe(vogais)
    })
    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        const vogais = 'a, e, i, o, u';
        expect(encode(vogais).length).toBe(vogais.length);
    })
})