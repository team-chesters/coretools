import isArray from "../src/array/isArray.js";

describe("isArray function", () => {
  it("should return true for an empty array", () => {
    const emptyArray = [];
    expect(isArray(emptyArray)).toBe(true);
  });

  it("should return true for a non-empty array", () => {
    const nonEmptyArray = [1, 2, 3];
    expect(isArray(nonEmptyArray)).toBe(true);
  });

  it("should return false for an object", () => {
    const obj = { key: "value" };
    expect(isArray(obj)).toBe(false);
  });

  it("should return false for a string", () => {
    const str = "Hello, World!";
    expect(isArray(str)).toBe(false);
  });

  it("should return false for a number", () => {
    const num = 42;
    expect(isArray(num)).toBe(false);
  });

  it("should return false for null", () => {
    const nullValue = null;
    expect(isArray(nullValue)).toBe(false);
  });

  it("should return false for undefined", () => {
    const undefinedValue = undefined;
    expect(isArray(undefinedValue)).toBe(false);
  });
});
