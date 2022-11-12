const sum = require('../scripts/sum');

it('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(() => sum('4', 5)).toThrow();
    expect(() => sum(4, '5')).toThrow(/^parameters must be numbers$/);
})
