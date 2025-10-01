import GenerateRandomNumberInRange from '../src/random/GenerateRandomNumberInRange.js';

describe('GenerateRandomNumberInRange function', () => {
    it('should generate number within specified range', () => {
        const min = 1;
        const max = 10;
        const result = GenerateRandomNumberInRange(min, max);
        
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThan(max);
    });

    it('should generate different numbers on multiple calls', () => {
        const results = new Set();
        for (let i = 0; i < 100; i++) {
            results.add(GenerateRandomNumberInRange(1, 10));
        }
        
        expect(results.size).toBeGreaterThan(1);
    });

    it('should handle single number range', () => {
        const result = GenerateRandomNumberInRange(5, 6);
        expect(result).toBe(5);
    });

    it('should handle negative ranges', () => {
        const result = GenerateRandomNumberInRange(-10, -1);
        expect(result).toBeGreaterThanOrEqual(-10);
        expect(result).toBeLessThan(-1);
    });
});
