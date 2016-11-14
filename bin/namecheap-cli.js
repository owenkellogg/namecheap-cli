#!/usr/bin/env node

var Table = require('cli-table');
const Logger = require("winston")
const program = require("commander")
const client = require("../lib/NamecheapClient")({
  ipAddress: process.env.NAMECHEAP_CLIENT_IP_ADDRESS,
  apiKey: process.env.NAMECHEAP_API_KEY
})
const colors = require('colors')

program
  .command('check <domain>')
  .action(domain => {
    Logger.info(colors.white(`domain:check ${domain}`))


    client.checkDomain(domain).then(result => {
      Logger.info(colors.white('domain:check:complete'))

      if (result.Available === "true") {
        Logger.info(colors.green(`Yay! ${result.Domain} is available!`))
      } else {
        Logger.info(colors.red(`Sadly ${result.Domain} is not avaialable :(`))
      }
    })
    .catch(error => {
      Logger.error('domain:check:error', error)
    })
  })

program
  .command('domains.dns.getList <domain>')
  .action(domain => {
    Logger.info(colors.white(`domains.dns.getList(${domain})`))

    console.log(client.domains.dns.getList)

    client.domains.dns.getList(domain).then(result => {

      Logger.info(colors.white('domains.dns.getList:complete'))
      Logger.info(colors.white(result))
    })
    .catch(error => {
      Logger.error('domain:check:error', error)
    })
  })

program
  .command('domains.dns.setCustom <domain> [nameservers]')
  .action((domain, nameservers) => {
    Logger.info(colors.white(`domains.dns.setCustom(${domain}, ${nameservers})`))

    client.domains.dns.setCustom(domain, nameservers).then(result => {

      if (result === "true") {
        Logger.info(colors.green('domains.dns.setCustom:success'))
      } else {
        Logger.error(colors.red('domains.dns.setCustom:failed'))
      }
    })
    .catch(error => {
      Logger.error('domains.dns.setCustom:error', error)
    })
  })

program
  .command('ssl.getList')
  .action(() => {

    Logger.info('ssl.getList')

    client.ssl.getList().then(list => {
      Logger.info('ssl.getList:success')
      console.log(list)

      var table = new Table({
          head: ['HostName', 'CertificateID']
        , colWidths: [40, 20]
      });

      // table is an Array, so you can `push`, `unshift`, `splice` and friends
      list.forEach(item => {
        table.push([item['$']['HostName'],item['$']['CertificateID']])
      })

      console.log(table)
      console.log(table.toString())
    })
    .catch(error => {
      Logger.error('ssl.getList:error', error)
    })
  })

program
  .command('ssl.activate <certificateId> <domain> <csrPath>')
  .action((certificateId, domain, csrPath) => {

    Logger.info(`ssl.activate(${certificateId}, ${domain}, ${csrPath}})`)

    client.ssl.activate(certificateId, domain, csrPath).then(cert => {
      console.log(cert.SSLActivateResult[0]['$'].IsSuccess)
    })
    .catch(error => {
      Logger.error("ssl.activate:error", error)
    })
  })

program
  .command('ssl.getInfo <certificateId>')
  .action((certificateId) => {

    Logger.info(`ssl.getInfo(${certificateId})`)

    client.ssl.getInfo(certificateId).then(info => {
      Logger.info(info)
    })
    .catch(error => {
      Logger.error("ssl.activate:error", error)
    })
  })

program
  .command('domains.create <domain>')
  .action((domain) => {

    Logger.info(`domains.create(${domain})`)

    client.domains.create(domain).then(info => {
      Logger.info(info)
    })
    .catch(error => {
      Logger.error("domains.create:error", error)
    })
  })

program.parse(process.argv)

