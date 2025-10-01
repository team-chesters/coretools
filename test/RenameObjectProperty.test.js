import RenameObjectProperty from '../src/object/RenameObjectProperty.js';

describe('RenameObjectProperty function', () => {
    it('should rename object property', () => {
        const obj = { oldName: 'value', other: 'keep' };
        const result = RenameObjectProperty(obj, 'oldName', 'newName');
        
        expect(result).toEqual({ newName: 'value', other: 'keep' });
    });

    it('should handle non-existent property', () => {
        const obj = { other: 'keep' };
        const result = RenameObjectProperty(obj, 'nonExistent', 'newName');
        
        expect(result).toEqual({ other: 'keep', newName: undefined });
    });

    it('should handle empty object', () => {
        const obj = {};
        const result = RenameObjectProperty(obj, 'oldName', 'newName');
        
        expect(result).toEqual({ newName: undefined });
    });

    it('should not modify original object', () => {
        const obj = { oldName: 'value' };
        const result = RenameObjectProperty(obj, 'oldName', 'newName');
        
        expect(obj).toEqual({ oldName: 'value' });
        expect(result).toEqual({ newName: 'value' });
    });

    it('should handle same old and new names', () => {
        const obj = { name: 'value' };
        const result = RenameObjectProperty(obj, 'name', 'name');
        
        expect(result).toEqual({ name: 'value' });
    });
});
