import { expect } from "chai";
import "mocha";

function fib(i : number) {
	if(i === 0) return 1;
	if(i === 1) return 1;
	return fib(i - 2) + fib(i - 1);
}

describe("Fibonacci", () => {
	it("should equal 1 for call with 0", () => {
		expect(fib(0)).to.equal(1);
	});

	it("should equal 2 for call with 2", () => {
		expect(fib(2)).to.equal(2);
	});

	it("should equal 5 for call with 4", () => {
		expect(fib(4)).to.equal(5);
	});

	it("should equal 21 for call with 7", () => {
		expect(fib(7)).to.equal(21);
	});
});
