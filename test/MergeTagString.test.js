import MergeTagString from '../src/string/MergeTagString.js';

describe('MergeTagString function', () => {
    it('should merge tag strings', () => {
        const result = MergeTagString('tag1', 'tag2', 'tag3');
        expect(result).toBe('tag1,tag2,tag3');
    });

    it('should handle single tag', () => {
        const result = MergeTagString('tag1');
        expect(result).toBe('tag1');
    });

    it('should handle empty tags', () => {
        const result = MergeTagString('tag1', '', 'tag3');
        expect(result).toBe('tag1,,tag3');
    });

    it('should handle no arguments', () => {
        const result = MergeTagString();
        expect(result).toBe('');
    });

    it('should handle duplicate tags', () => {
        const result = MergeTagString('tag1', 'tag1', 'tag2');
        expect(result).toBe('tag1,tag1,tag2');
    });

    it('should handle special characters in tags', () => {
        const result = MergeTagString('tag-1', 'tag_2', 'tag.3');
        expect(result).toBe('tag-1,tag_2,tag.3');
    });
});
