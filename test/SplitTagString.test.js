import SplitTagString from '../src/string/SplitTagString.js';

describe('SplitTagString function', () => {
    it('should split comma-separated tag string', () => {
        const result = SplitTagString('tag1,tag2,tag3');
        expect(result).toEqual(['tag1', 'tag2', 'tag3']);
    });

    it('should handle single tag', () => {
        const result = SplitTagString('tag1');
        expect(result).toEqual(['tag1']);
    });

    it('should handle empty string', () => {
        const result = SplitTagString('');
        expect(result).toEqual(['']);
    });

    it('should handle spaces around tags', () => {
        const result = SplitTagString('tag1, tag2 , tag3');
        expect(result).toEqual(['tag1', ' tag2 ', ' tag3']);
    });

    it('should handle empty tags', () => {
        const result = SplitTagString('tag1,,tag3');
        expect(result).toEqual(['tag1', '', 'tag3']);
    });

    it('should handle trailing comma', () => {
        const result = SplitTagString('tag1,tag2,');
        expect(result).toEqual(['tag1', 'tag2', '']);
    });
});
