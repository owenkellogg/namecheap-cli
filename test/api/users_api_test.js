const assert = require("assert")
const api = require("../../lib/api")

describe("users api", () => {

  it("#getPricing should be a function", () => {
    assert(typeof api.users.getPricing === "function")
  })

  it("#getBalances should be a function", () => {
    assert(typeof api.users.getBalances === "function")
  })

  it("#changePassword should be a function", () => {
    assert(typeof api.users.changePassword === "function")
  })

  it("#update should be a function", () => {
    assert(typeof api.users.update === "function")
  })

  it("#createaddfundsrequest should be a function", () => {
    assert(typeof api.users.createaddfundsrequest === "function")
  })

  it("#getAddFundsStatus should be a function", () => {
    assert(typeof api.users.getAddFundsStatus === "function")
  })

  it("#create should be a function", () => {
    assert(typeof api.users.create === "function")
  })

  it("#login should be a function", () => {
    assert(typeof api.users.login === "function")
  })

  it("#resetPassword should be a function", () => {
    assert(typeof api.users.resetPassword === "function")
  })
})

