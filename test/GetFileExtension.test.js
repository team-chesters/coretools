import GetFileExtension from '../src/file/GetFileExtension.js';

describe('GetFileExtension function', () => {
    it('should extract file extension correctly', () => {
        expect(GetFileExtension('file.txt')).toBe('.txt');
        expect(GetFileExtension('image.jpg')).toBe('.jpg');
        expect(GetFileExtension('script.js')).toBe('.js');
    });

    it('should handle files without extensions', () => {
        expect(GetFileExtension('README')).toBe('');
        expect(GetFileExtension('file')).toBe('');
    });

    it('should handle multiple dots', () => {
        expect(GetFileExtension('file.min.js')).toBe('.js');
        expect(GetFileExtension('backup.tar.gz')).toBe('.gz');
    });

    it('should handle empty string', () => {
        expect(GetFileExtension('')).toBe('');
    });

    it('should handle files with only extension', () => {
        expect(GetFileExtension('.gitignore')).toBe('.gitignore');
        expect(GetFileExtension('.env')).toBe('.env');
    });
});
