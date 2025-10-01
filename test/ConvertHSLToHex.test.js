import ConvertHSLToHex from '../src/convert/ConvertHSLToHex.js';

const VALID_SKYBLUE = {
    h: 197,
    s: 71,
    l: 73
};

const INVALID_SKYBLUE = {
    h: 197,
    s: 71112,
    l: 73
};

test('Test Function "ConvertHSLToHex"', () => {
    expect(
        ConvertHSLToHex(
            VALID_SKYBLUE.h,
            VALID_SKYBLUE.s,
            VALID_SKYBLUE.l
        ))
            .toBe('#89cfeb');

    expect(
        ConvertHSLToHex(
            INVALID_SKYBLUE.h,
            INVALID_SKYBLUE.s,
            INVALID_SKYBLUE.l
        ))
            .toBe('Invalid Parameter');

    expect(
        ConvertHSLToHex(
            'asd',
            INVALID_SKYBLUE.s,
            INVALID_SKYBLUE.l
        ))
            .toBe('Invalid Parameter');
});