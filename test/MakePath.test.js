import MakePath from '../src/string/MakePath.js';

describe('MakePath function', () => {
    it('should join path segments with forward slashes', () => {
        expect(MakePath('folder', 'file.txt')).toBe('folder/file.txt');
        expect(MakePath('path', 'to', 'file')).toBe('path/to/file');
    });

    it('should handle single segment', () => {
        expect(MakePath('file.txt')).toBe('file.txt');
    });

    it('should handle empty segments', () => {
        expect(MakePath('', 'file.txt')).toBe('/file.txt');
        expect(MakePath('folder', '')).toBe('folder/');
    });

    it('should handle multiple empty segments', () => {
        expect(MakePath('', '', 'file.txt')).toBe('//file.txt');
    });

    it('should handle segments with existing slashes', () => {
        expect(MakePath('folder/', '/file.txt')).toBe('folder//file.txt');
    });

    it('should handle no arguments', () => {
        expect(MakePath()).toBe('');
    });
});
