const myRemove = require('../scripts/myRemove');

it('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array', () => {
    let expected = myRemove([1, 2, 3, 4], 3);
    expect(expected).toEqual([1, 2, 4]);
    expect(expected).not.toEqual([1, 2, 3, 4]);
    expected = myRemove([1, 2, 3, 4], 5);
    expect(expected).toEqual([1, 2, 3, 4]);
})