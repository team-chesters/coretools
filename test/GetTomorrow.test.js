import GetTomorrow from '../src/date/GetTomorrow.js';

describe('GetTomorrow function', () => {
    it('should return tomorrow date', () => {
        const tomorrow = GetTomorrow();
        const today = new Date();
        const expectedTomorrow = new Date(today);
        expectedTomorrow.setDate(today.getDate() + 1);
        expectedTomorrow.setHours(0, 0, 0, 0);

        expect(tomorrow.getTime()).toBe(expectedTomorrow.getTime());
    });

    it('should return a Date object', () => {
        const tomorrow = GetTomorrow();
        expect(tomorrow).toBeInstanceOf(Date);
    });

    it('should have time set to 00:00:00', () => {
        const tomorrow = GetTomorrow();
        expect(tomorrow.getHours()).toBe(0);
        expect(tomorrow.getMinutes()).toBe(0);
        expect(tomorrow.getSeconds()).toBe(0);
        expect(tomorrow.getMilliseconds()).toBe(0);
    });
});
