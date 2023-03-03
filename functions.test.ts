const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Returns an Array', () => {
        const input = [1, 2, 3, 4, 5];
        const output = shuffleArray(input);
        expect(Array.isArray(output)).toBe(true);
    })

    test('returns shuffled array', () => {
        const input = [1, 2, 3, 4, 5];
        const output = shuffleArray(input);
        expect(output).not.toEqual(input);
    })
})