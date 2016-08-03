const assert = require("assert")
const api = require("../../lib/api")

describe("ssl api", () => {

  it("#activate should be a function", () => {
    assert(typeof api.ssl.activate === "function")
  })

  it("#getInfo should be a function", () => {
    assert(typeof api.ssl.getInfo === "function")
  })

  it("#parseCSR should be a function", () => {
    assert(typeof api.ssl.parseCSR === "function")
  })

  it("#getApproverEmailList should be a function", () => {
    assert(typeof api.ssl.getApproverEmailList === "function")
  })

  it("#getList should be a function", () => {
    assert(typeof api.ssl.getList === "function")
  })

  it("#create should be a function", () => {
    assert(typeof api.ssl.create === "function")
  })

  it("#renew should be a function", () => {
    assert(typeof api.ssl.renew === "function")
  })

  it("#resendApproverEmail should be a function", () => {
    assert(typeof api.ssl.resendApproverEmail === "function")
  })

  it("#resendfulfillmentemail should be a function", () => {
    assert(typeof api.ssl.resendfulfillmentemail === "function")
  })

  it("#reissue should be a function", () => {
    assert(typeof api.ssl.reissue === "function")
  })

  it("#purchasemoresans should be a function", () => {
    assert(typeof api.ssl.purchasemoresans === "function")
  })

  it("#revokecertificate should be a function", () => {
    assert(typeof api.ssl.revokecertificate === "function")
  })
})

