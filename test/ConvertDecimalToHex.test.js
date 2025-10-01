import ConvertDecimalToHex from '../src/convert/ConvertDecimalToHex.js';

describe('ConvertDecimalToHex', () => {
    test('Converts decimal 10 to hexadecimal', () => {
        expect(ConvertDecimalToHex(10)).toBe('0a');
    });

    test('Converts decimal 255 to hexadecimal', () => {
        expect(ConvertDecimalToHex(255)).toBe('ff');
    });

    test('Handles decimal 0', () => {
        expect(ConvertDecimalToHex(0)).toBe('00');
    });

    test('Handles negative decimal number', () => {
        expect(ConvertDecimalToHex(-1)).toBe('-1');
    });

    test('Handles large decimal number', () => {
        expect(ConvertDecimalToHex(123456)).toBe('1e240');
    });
});