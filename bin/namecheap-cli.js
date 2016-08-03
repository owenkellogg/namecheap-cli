#!/usr/bin/env node

const Logger = require("winston")
const program = require("commander")
const NamecheapClient = require("../lib/NamecheapClient")
const colors = require('colors')

program
  .command('check <domain>')
  .action(domain => {
    Logger.info(colors.white(`domain:check ${domain}`))

    NamecheapClient.checkDomain(domain).then(result => {
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

program.parse(process.argv)



