describe("calc", function () {
    it("should add two numbers", function () {
        expect(add(10, 10)).toBe(20);
    });


    it("should  multiply two numbers", function () {
        expect(multiply(2, 2)).toBe(4);
    });

    it("should  minus two numbers", function () {
        expect(minus(2, 2)).toBe(0);
    });


    it("should  divide two numbers", function () {
        expect(divide(2, 2)).toBe(1);
    });


});