const {polybius} = require("../src/polybius")
const {expect} = require("chai")

describe("Polybius", ()=> {
  it("encode, no spaces", () => {
    const actual = polybius("thinkful")
    const expected = "4432423352125413"
    expect(actual).to.equal(expected)
  })
  
  it("encode, with spaces", () => {
    const actual = polybius("Hello world")
    const expected = '3251131343 2543241341'
    expect(actual).to.equal(expected)
  })
  
  it("decode", ()=> {
    const actual = polybius("3251131343 2543241341", false)
    const expected = "hello world"
    expect(actual).to.equal(expected)
  })
  
  it("decode with i&j", () => {
    const actual = polybius("4432423352125413", false)
    const expected = "thijnkful"
    expect(actual).to.equal(expected)
  })
  
  it("decode with odd numbered string", ()=>{
    const actual = polybius("44324233521254134", false)
    const expected = false
    expect(actual).to.equal(expected)
  })
})
