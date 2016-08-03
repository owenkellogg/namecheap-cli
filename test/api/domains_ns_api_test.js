const assert = require("assert")
const api = require("../../lib/api")

describe("domains.ns api", () => {

  it("#create should be a function", () => {
    assert(typeof api.domains.ns.create === "function")
  })

  it("#delete should be a function", () => {
    assert(typeof api.domains.ns.delete === "function")
  })

  it("#getInfo should be a function", () => {
    assert(typeof api.domains.ns.getInfo === "function")
  })

  it("#update should be a function", () => {
    assert(typeof api.domains.ns.update === "function")
  })
})

