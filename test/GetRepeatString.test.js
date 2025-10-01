import GetRepeatString from '../src/string/GetRepeatString.js';

describe('GetRepeatString function', () => {
    it('should repeat string specified number of times', () => {
        expect(GetRepeatString('Hello', 3)).toBe('HelloHelloHello');
        expect(GetRepeatString('a', 5)).toBe('aaaaa');
    });

    it('should return empty string for zero count', () => {
        expect(GetRepeatString('Hello', 0)).toBe('');
    });

    it('should return original string for count of 1', () => {
        expect(GetRepeatString('Hello', 1)).toBe('Hello');
    });

    it('should handle empty string', () => {
        expect(GetRepeatString('', 3)).toBe('');
    });

    it('should handle single character', () => {
        expect(GetRepeatString('*', 4)).toBe('****');
    });
});
