import ExecuteCallbackWithParams from '../src/async/ExecuteCallbackWithParams.js';

describe('ExecuteCallbackWithParams function', () => {
    it('should execute callback with parameters', () => {
        const mockCallback = jest.fn();
        ExecuteCallbackWithParams(mockCallback, 'param1', 'param2');
        
        expect(mockCallback).toHaveBeenCalledWith('param1', 'param2');
    });

    it('should handle callback without parameters', () => {
        const mockCallback = jest.fn();
        ExecuteCallbackWithParams(mockCallback);
        
        expect(mockCallback).toHaveBeenCalledWith();
    });

    it('should return callback result', () => {
        const callback = (a, b) => a + b;
        const result = ExecuteCallbackWithParams(callback, 2, 3);
        
        expect(result).toBe(5);
    });
});
