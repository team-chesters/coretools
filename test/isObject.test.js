import isObject from "../src/object/isObject";

// Jest test cases for isObject function
describe("isObject function", () => {
  it("should return true for an object", () => {
    const testObject = {};
    expect(isObject(testObject)).toBe(true);
  });

  it("should return true for a function", () => {
    const testFunction = () => {};
    expect(isObject(testFunction)).toBe(true);
  });

  it("should return false for null", () => {
    const testValue = null;
    expect(isObject(testValue)).toBe(false);
  });

  it("should return false for undefined", () => {
    const testValue = undefined;
    expect(isObject(testValue)).toBe(false);
  });

  it("should return false for a string", () => {
    const testValue = "Hello, World!";
    expect(isObject(testValue)).toBe(false);
  });

  it("should return false for a number", () => {
    const testValue = 42;
    expect(isObject(testValue)).toBe(false);
  });
});
