import ymdhhmmToDate from '../src/date/ymdhhmmToDate.js';

describe('ymdhhmmToDate function', () => {
    it('should convert YYYYMMDDHHMM to Date object', () => {
        const result = ymdhhmmToDate('202103151430');
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(2); // March (0-indexed)
        expect(result.getDate()).toBe(15);
        expect(result.getHours()).toBe(14);
        expect(result.getMinutes()).toBe(30);
    });

    it('should handle midnight', () => {
        const result = ymdhhmmToDate('202103150000');
        
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
    });

    it('should handle end of day', () => {
        const result = ymdhhmmToDate('202103152359');
        
        expect(result.getHours()).toBe(23);
        expect(result.getMinutes()).toBe(59);
    });

    it('should handle single digit values', () => {
        const result = ymdhhmmToDate('202101010100');
        
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(0); // January (0-indexed)
        expect(result.getDate()).toBe(1);
        expect(result.getHours()).toBe(1);
        expect(result.getMinutes()).toBe(0);
    });

    it('should handle invalid format', () => {
        const result = ymdhhmmToDate('invalid');
        expect(result).toBe(false);
    });
});
