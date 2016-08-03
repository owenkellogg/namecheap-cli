const assert = require("assert")
const api = require("../../lib/api")

describe("domains.dns api", () => {

  it("#setDefault should be a function", () => {
    assert(typeof api.domains.dns.setDefault === "function")
  })

  it("#setCustom should be a function", () => {
    assert(typeof api.domains.dns.setCustom === "function")
  })

  it("#getList should be a function", () => {
    assert(typeof api.domains.dns.getList === "function")
  })

  it("#getHosts should be a function", () => {
    assert(typeof api.domains.dns.getHosts === "function")
  })

  it("#getEmailForwarding should be a function", () => {
    assert(typeof api.domains.dns.getEmailForwarding === "function")
  })

  it("#setEmailForwarding should be a function", () => {
    assert(typeof api.domains.dns.setEmailForwarding === "function")
  })

  it("#setHosts should be a function", () => {
    assert(typeof api.domains.dns.setHosts === "function")
  })
})

