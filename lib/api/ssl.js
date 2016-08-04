const logger = require('winston')
const baseURL = "https://api.namecheap.com/xml.response"
const apiUser = "stevenzeiler"
const userName = "stevenzeiler"
const apiKey = process.env['NAMECHEAP_API_KEY']
const clientIP = process.env['NAMECHEAP_CLIENT_IP_ADDRESS']
const http = require("superagent")
const xml2js = require("xml2js")
const querystring = require("querystring")
const fs = require("fs")

const approverEmail = "steven@zensoftware.co"

module.exports.activate = function(certificateId, domain, csrPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(csrPath, (error, content) => {
      console.log('read file', content.toString())
      if (error) { return reject(error) }

      const command = 'namecheap.ssl.activate'

      const params = {
        ApiUser: apiUser,
        ApiKey: apiKey,
        UserName: userName,
        Command: command,
        ClientIp: clientIP,
        CertificateID: certificateId,
        csr: content.toString(),
        WebServerType: "other",
        AdminJobTitle: "Software Architect",
        AdminFirstName: "Steven",
        AdminLastName: "Zeiler",
        AdminAddress1: "3824 Cedar Springs Rd #801-4984",
        AdminCity: "Dallas",
        AdminStateProvince: "TX",
        AdminPostalCode: "75219",
        AdminCountry: "US",
        AdminPhone: "+1.6036174136",
        AdminEmailAddress: "steven@zensoftware.co",
        HTTPDCValidation: "TRUE"
      }

      const url = `${baseURL}?${querystring.stringify(params)}`

      logger.info(url)
      http
         .get(url)
         .end((error, response) => {
           if (error) { return reject(error) }
            console.log(response)

           xml2js.parseString(response.text, (error, xml) => {
             if (error) { return reject(error) }
             resolve(xml.ApiResponse.CommandResponse[0])
           })
         })
    })
    
  })
}

module.exports.getInfo = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.parseCSR = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.getApproverEmailList = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.getList = function() {

  const command = 'namecheap.ssl.getList'

  logger.info('api.ssl.getList')

  return new Promise((resolve, reject) => {
    const url = `${baseURL}?ApiUser=${apiUser}&ApiKey=${apiKey}&UserName=${userName}&Command=${command}&ClientIp=${clientIP}`
    logger.info(url)
     http
        .get(url)
        .end((error, response) => {
          if (error) { return reject(error) }

          xml2js.parseString(response.text, (error, xml) => {
            if (error) { return reject(error) }
            resolve(xml.ApiResponse.CommandResponse[0].SSLListResult[0]['SSL'])
          })
        })
  })
}

module.exports.create = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.renew = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.resendApproverEmail = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.resendfulfillmentemail = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.reissue = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.purchasemoresans = function() {
  return new Promise((resolve, reject) => {
  })
}

module.exports.revokecertificate = function() {
  return new Promise((resolve, reject) => {
  })
}

