import EscapeHTML from '../src/string/EscapeHTML.js';

describe('EscapeHTML function', () => {
    it('should escape HTML characters', () => {
        expect(EscapeHTML('<div>')).toBe('&lt;div&gt;');
        expect(EscapeHTML('&amp;')).toBe('&amp;amp;');
    });

    it('should handle empty string', () => {
        expect(EscapeHTML('')).toBe('');
    });

    it('should handle special characters', () => {
        expect(EscapeHTML('"quotes"')).toBe('&quot;quotes&quot;');
        expect(EscapeHTML("'apostrophe'")).toBe('&#39;apostrophe&#39;');
    });
});
