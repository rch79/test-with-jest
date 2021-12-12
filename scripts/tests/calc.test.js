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
       
    });
    describe("Multiplication function", () => {

    });
    describe("Division function", () => {

    });
});