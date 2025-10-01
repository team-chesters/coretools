import Sleep from '../src/async/Sleep.js';

describe('Sleep function', () => {
    it('should return a Promise', () => {
        const sleepPromise = Sleep(100);
        expect(sleepPromise).toBeInstanceOf(Promise);
    });

    it('should resolve after specified time', async () => {
        const start = Date.now();
        await Sleep(100);
        const end = Date.now();
        
        // Allow some tolerance for timing
        expect(end - start).toBeGreaterThanOrEqual(95);
        expect(end - start).toBeLessThan(150);
    });

    it('should handle zero delay', async () => {
        const start = Date.now();
        await Sleep(0);
        const end = Date.now();
        
        expect(end - start).toBeLessThan(50);
    });
});
