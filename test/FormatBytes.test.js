import FormatBytes from '../src/number/FormatBytes.js';

describe('FormatBytes function', () => {
    it('should format bytes correctly', () => {
        expect(FormatBytes(0)).toBe('0 Bytes');
        expect(FormatBytes(1024)).toBe('1 KB');
        expect(FormatBytes(1048576)).toBe('1 MB');
    });

    it('should handle decimal places', () => {
        expect(FormatBytes(1536, 1)).toBe('1.5 KB');
        expect(FormatBytes(1536, 0)).toBe('2 KB');
    });

    it('should return "Invalid Bytes" for negative numbers', () => {
        expect(FormatBytes(-1)).toBe('Invalid Bytes');
        expect(FormatBytes(-1024)).toBe('Invalid Bytes');
    });

    it('should handle large numbers', () => {
        expect(FormatBytes(1099511627776)).toBe('1 TB');
    });

    it('should use default 2 decimal places', () => {
        expect(FormatBytes(1536)).toBe('1.5 KB');
    });
});
