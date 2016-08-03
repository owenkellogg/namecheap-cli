const assert = require("assert")
const api = require("../../lib/api")

describe("domains.transfer api", () => {

  it("#create should be a function", () => {
    assert(typeof api.domains.transfer.create === "function")
  })

  it("#getStatus should be a function", () => {
    assert(typeof api.domains.transfer.getStatus === "function")
  })

  it("#updateStatus should be a function", () => {
    assert(typeof api.domains.transfer.updateStatus === "function")
  })

  it("#getList should be a function", () => {
    assert(typeof api.domains.transfer.getList === "function")
  })
})

