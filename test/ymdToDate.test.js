import ymdToDate from '../src/date/ymdToDate.js';

describe('ymdToDate function', () => {
    it('should convert YYYYMMDD to Date object', () => {
        const result = ymdToDate('20210315');
        
        expect(result).toBeInstanceOf(Date);
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(2); // March (0-indexed)
        expect(result.getDate()).toBe(15);
    });

    it('should set time to start of day', () => {
        const result = ymdToDate('20210315');
        
        expect(result.getHours()).toBe(0);
        expect(result.getMinutes()).toBe(0);
        expect(result.getSeconds()).toBe(0);
        expect(result.getMilliseconds()).toBe(0);
    });

    it('should handle leap year', () => {
        const result = ymdToDate('20200229');
        
        expect(result.getFullYear()).toBe(2020);
        expect(result.getMonth()).toBe(1); // February (0-indexed)
        expect(result.getDate()).toBe(29);
    });

    it('should handle single digit months and days', () => {
        const result = ymdToDate('20210101');
        
        expect(result.getFullYear()).toBe(2021);
        expect(result.getMonth()).toBe(0); // January (0-indexed)
        expect(result.getDate()).toBe(1);
    });

    it('should handle invalid format', () => {
        const result = ymdToDate('invalid');
        expect(result).toBe(false);
    });
});
