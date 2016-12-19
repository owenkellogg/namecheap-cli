const http = require("superagent")
const xml2js = require("xml2js")
const Logger = require("winston")

const api = require("./api/index.js")

const namecheapBaseURL = "https://api.namecheap.com/xml.response"
const namecheapAPIUser = "stevenzeiler"
const namecheapUserName = "stevenzeiler"
const namecheapAPIKey = process.env['NAMECHEAP_API_KEY']
const clientIP = "73.167.216.97"

module.exports = config => {

  if (!config.ipAddress) {
    throw new Error('ipAddress missing: use NAMECHEAP_CLIENT_IP_ADDRESS environment variable')
  }

  if (!config.apiKey) {
    throw new Error('apiKey missing: use NAMECHEAP_API_KEY environment variable')
  }

  var client = {}

  client.checkDomain = domain => {

    var command = "namecheap.domains.check"

    return new Promise((resolve, reject) => {

      http
        .get(`${namecheapBaseURL}?ApiUser=${namecheapAPIUser}&ApiKey=${config.apiKey}&UserName=${namecheapUserName}&Command=${command}&ClientIp=${config.ipAddress}&DomainList=${domain}`)
        .end((error, response) => {
          if (error) { return reject(error) }

          xml2js.parseString(response.text, (error, xml) => {
            if (error) { return reject(error) }
            try {
              resolve(xml.ApiResponse.CommandResponse[0].DomainCheckResult[0]['$'])
            } catch(e) {
              Logger.error('error parsing response', e)
              Logger.info('original response text', response.text)
            }
          })
        })
    })
  } 

  client.domains = {
    create: api.domains.create,
    getList: api.domains.getList,

    dns: {
      getList: api.domains.dns.getList,
      setCustom: api.domains.dns.setCustom
    }
  }

  client.ssl = {
    getList: api.ssl.getList,
    activate: api.ssl.activate,
    getInfo: api.ssl.getInfo
  }

  return client

}

