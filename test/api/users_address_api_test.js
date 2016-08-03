const assert = require("assert")
const api = require("../../lib/api")

describe("users.address api", () => {

  it("#create should be a function", () => {
    assert(typeof api.users.address.create === "function")
  })

  it("#delete should be a function", () => {
    assert(typeof api.users.address.delete === "function")
  })

  it("#getInfo should be a function", () => {
    assert(typeof api.users.address.getInfo === "function")
  })

  it("#getList should be a function", () => {
    assert(typeof api.users.address.getList === "function")
  })

  it("#setDefault should be a function", () => {
    assert(typeof api.users.address.setDefault === "function")
  })

  it("#update should be a function", () => {
    assert(typeof api.users.address.update === "function")
  })
})

