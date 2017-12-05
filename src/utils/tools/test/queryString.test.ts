import queryString from '../queryString'
import chai from 'chai'

const { expect } = chai


describe("utils/tools/queryString test", () => {
  it("queryString.ArrayMode should be a object", () => {
    expect(queryString.ArrayMode).to.be.depp.equal({
      MUL: "multiple",
      SPLIT: "split"
    })
  })


  // it("queryString.stringify should return string", () => {
  //   // expect(queryString.stringify())
  // })
})