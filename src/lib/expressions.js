let verex = require('verbal-expressions');
export let testerAT = verex()
  .then('//')
  .maybe(' ')
  .then('@include')
  .maybe(' ')
  .then('\'')
  .or('"')
  .anything()
  .then('\'')
  .or('"')
  .maybe(';')
  .anything();