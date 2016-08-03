const assert = require("assert")
const api = require("../../lib/api")

describe("domains api", () => {

  it("#getList should be a function", () => {
    assert(typeof api.domains.getList === "function")
  })

  it("#getContacts should be a function", () => {
    assert(typeof api.domains.getContacts === "function")
  })

  it("#create should be a function", () => {
    assert(typeof api.domains.create === "function")
  })

  it("#getTldList should be a function", () => {
    assert(typeof api.domains.getTldList === "function")
  })

  it("#setContacts should be a function", () => {
    assert(typeof api.domains.setContacts === "function")
  })

  it("#check should be a function", () => {
    assert(typeof api.domains.check === "function")
  })

  it("#reactivate should be a function", () => {
    assert(typeof api.domains.reactivate === "function")
  })

  it("#renew should be a function", () => {
    assert(typeof api.domains.renew === "function")
  })

  it("#getRegistrarLock should be a function", () => {
    assert(typeof api.domains.getRegistrarLock === "function")
  })

  it("#setRegistrarLock should be a function", () => {
    assert(typeof api.domains.setRegistrarLock === "function")
  })

  it("#getInfo should be a function", () => {
    assert(typeof api.domains.getInfo === "function")
  })
})

