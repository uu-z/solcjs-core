const solcImport = require('solc-import-fix')

module.exports = getReadCallback

async function getReadCallback(sourcecode, getImportContent) {
  if (!solcImport.isExistImport(sourcecode)) return
  return await solcImport.getReadCallback(sourcecode, getImportContent)
}
