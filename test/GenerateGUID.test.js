import GenerateGUID from '../src/random/GenerateGUID.js';

describe('GenerateGUID function', () => {
    it('should generate a valid GUID format', () => {
        const guid = GenerateGUID();
        expect(guid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    });

    it('should generate unique GUIDs', () => {
        const guid1 = GenerateGUID();
        const guid2 = GenerateGUID();
        expect(guid1).not.toBe(guid2);
    });

    it('should generate multiple unique GUIDs', () => {
        const guids = new Set();
        for (let i = 0; i < 100; i++) {
            guids.add(GenerateGUID());
        }
        expect(guids.size).toBe(100);
    });
});
