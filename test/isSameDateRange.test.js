import isSameDateRange from '../src/date/isSameDateRange.js';

describe('isSameDateRange function', () => {
    it('should return true for same date ranges', () => {
        const start1 = new Date('2021-01-01');
        const end1 = new Date('2021-01-31');
        const start2 = new Date('2021-01-01');
        const end2 = new Date('2021-01-31');
        
        expect(isSameDateRange(start1, end1, start2, end2)).toBe(true);
    });

    it('should return false for different date ranges', () => {
        const start1 = new Date('2021-01-01');
        const end1 = new Date('2021-01-31');
        const start2 = new Date('2021-02-01');
        const end2 = new Date('2021-02-28');
        
        expect(isSameDateRange(start1, end1, start2, end2)).toBe(false);
    });

    it('should ignore time differences', () => {
        const start1 = new Date('2021-01-01 10:00:00');
        const end1 = new Date('2021-01-31 15:00:00');
        const start2 = new Date('2021-01-01 20:00:00');
        const end2 = new Date('2021-01-31 08:00:00');
        
        expect(isSameDateRange(start1, end1, start2, end2)).toBe(true);
    });

    it('should handle null/undefined dates', () => {
        expect(isSameDateRange(null, new Date(), new Date(), new Date())).toBe(false);
        expect(isSameDateRange(new Date(), null, new Date(), new Date())).toBe(false);
    });
});
