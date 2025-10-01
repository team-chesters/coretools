import GetAge from '../src/date/GetAge.js';

describe('GetAge function', () => {
    it('should calculate age correctly', () => {
        const birthDate = new Date();
        birthDate.setFullYear(birthDate.getFullYear() - 25);
        
        const age = GetAge(birthDate);
        expect(age).toBe(25);
    });

    it('should handle future birth date', () => {
        const futureDate = new Date();
        futureDate.setFullYear(futureDate.getFullYear() + 1);
        
        const age = GetAge(futureDate);
        expect(age).toBe(0);
    });

    it('should handle birth date from this year', () => {
        const thisYear = new Date();
        thisYear.setMonth(thisYear.getMonth() - 6);
        
        const age = GetAge(thisYear);
        expect(age).toBe(0);
    });
});
