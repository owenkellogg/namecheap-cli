const http = require("superagent")
const xml2js = require("xml2js")

const namecheapBaseURL = "https://api.namecheap.com/xml.response"
const namecheapAPIUser = "stevenzeiler"
const namecheapUserName = "stevenzeiler"
const namecheapAPIKey = process.env['NAMECHEAP_API_KEY']
const clientIP = "73.167.216.97"

module.exports.checkDomain = domain => {

  var command = "namecheap.domains.check"

  return new Promise((resolve, reject) => {

    http
      .get(`${namecheapBaseURL}?ApiUser=${namecheapAPIUser}&ApiKey=${namecheapAPIKey}&UserName=${namecheapUserName}&Command=${command}&ClientIp=${clientIP}&DomainList=${domain}`)
      .end((error, response) => {
        if (error) { return reject(error) }

        xml2js.parseString(response.text, (error, xml) => {
          if (error) { return reject(error) }
          resolve(xml.ApiResponse.CommandResponse[0].DomainCheckResult[0]['$'])
        })
      })
  })
} 

