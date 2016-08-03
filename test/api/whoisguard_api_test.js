const assert = require("assert")
const api = require("../../lib/api")

describe("whoisguard api", () => {

  it("#changeemailaddress should be a function", () => {
    assert(typeof api.whoisguard.changeemailaddress === "function")
  })

  it("#enable should be a function", () => {
    assert(typeof api.whoisguard.enable === "function")
  })

  it("#disable should be a function", () => {
    assert(typeof api.whoisguard.disable === "function")
  })

  it("#unallot should be a function", () => {
    assert(typeof api.whoisguard.unallot === "function")
  })

  it("#discard should be a function", () => {
    assert(typeof api.whoisguard.discard === "function")
  })

  it("#allot should be a function", () => {
    assert(typeof api.whoisguard.allot === "function")
  })

  it("#getList should be a function", () => {
    assert(typeof api.whoisguard.getList === "function")
  })

  it("#renew should be a function", () => {
    assert(typeof api.whoisguard.renew === "function")
  })
})
