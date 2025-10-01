import GenerateRandomBytes from '../src/random/GenerateRandomBytes.js';

describe('GenerateRandomBytes function', () => {
    it('should generate random bytes of specified length', () => {
        const bytes = GenerateRandomBytes(16);
        expect(bytes).toBeInstanceOf(Uint8Array);
        expect(bytes.length).toBe(16);
    });

    it('should generate different random values', () => {
        const bytes1 = GenerateRandomBytes(8);
        const bytes2 = GenerateRandomBytes(8);
        
        expect(bytes1).not.toEqual(bytes2);
    });

    it('should handle zero length', () => {
        const bytes = GenerateRandomBytes(0);
        expect(bytes.length).toBe(0);
    });

    it('should generate values within valid range', () => {
        const bytes = GenerateRandomBytes(100);
        for (let i = 0; i < bytes.length; i++) {
            expect(bytes[i]).toBeGreaterThanOrEqual(0);
            expect(bytes[i]).toBeLessThanOrEqual(255);
        }
    });
});
