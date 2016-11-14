const logger = require("winston")
const http = require("superagent")
const apiKey = process.env.NAMECHEAP_API_KEY
const clientIp = process.env.NAMECHEAP_CLIENT_IP_ADDRESS
const xml2js = require("xml2js")
const validator = require('validator')
const querystring = require("querystring")

module.exports.dns = require('./domains.dns.js')
module.exports.ns = require('./domains.ns.js')
module.exports.transfer = require('./domains.transfer.js')

module.exports.getList = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.getContacts = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.check = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.getTldList = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.setContacts = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.create = function(domain) {
  if (!validator.isFQDN(domain)) {
    return Promise.reject(new Error('invalid domain name'))
  }

  const command = 'namecheap.domains.create'

  logger.info('api.domains.create')

  const config = require("/etc/default/namecheap.json")

  config.ApiKey = apiKey
  config.Command = command
  config.ClientIp = clientIp
  config.DomainName = domain
  config.Years = 1

  logger.info("CONFIG FILE", querystring.stringify(config))

  const URL = `https://api.namecheap.com/xml.response?${querystring.stringify(config)}`

  return new Promise((resolve, reject) => {
    http.post(URL).end((error, response) => {
      if (error) { return reject(error) }

      xml2js.parseString(response.text, (error, xml) => {
        if (error) { return reject(error) }

        if (xml.ApiResponse.Errors.length > 0) {
          logger.error('xml.ApiResponse.Errors.length > 0', xml.ApiResponse)
          return reject(new Error(xml.ApiResponse.Errors[0].Error[0]['_']))
        }

        resolve(xml.ApiResponse.CommandResponse[0])
      })
    })
  })
}

module.exports.reactivate = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.renew = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.getRegistrarLock = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.setRegistrarLock = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.getInfo = function() {
  return new Promise((resolve, reject) => {
  })
}
