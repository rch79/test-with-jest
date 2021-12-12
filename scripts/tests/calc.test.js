/*function will break initially, which is expected, because code has not yet been written. As per 
Red, Green, Refactor Agile pattern*/

const { TestWatcher } = require("jest");
const addition = require("../calc");   //point to folder of function being tested
describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);         
        });
        test("should return 67 for 33 + 34", () => {
            expect(addition(33, 34)).toBe(67);         
        });

    });
    describe("Subtraction function", () => {
       test("should return 12 for 22 - 10", () => {
            expect(subtraction(22, 10)).toBe(12);
       });
       test("should return -1 for 9 - 10", () => {
        expect(subtraction(9, 10)).toBe(-1);
   });
    });
    describe("Multiplication function", () => {
        test("should return 24 for 2 x 12", () => {
            expect(multiplication(2, 12)).toBe(24);
        });
        test("should return 16 for -8 x -2", () => {
            expect(multiplication(-8, -2)).toBe(16);
        });
    });
    describe("Division function", () => {

    });
});