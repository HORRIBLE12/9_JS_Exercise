const { expect } = require("chai")
const sinon = require("sinon");
const { func } = require("../index")

let stub = sinon.stub(console, "log")

describe("Function with Parameters", () => {
    
    it('functionWithArgs should be created', () => {
        expect(func).to.exist
    })

    it('functionWithArgs should print 3 in console log', () => {
        func(1, 2)
        expect(stub.calledWith(3)).to.be.true
    })

    it('functionWithArgs should print 10 in console log', () => {
        func(4, 6)
        expect(stub.calledWith(10)).to.be.true
    })
})