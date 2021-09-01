#!/usr/bin/env node


const importLocal = require("import-local");
const npmLog = require("npmlog");

if(importLocal(__filename)) {
    npmLog.info("cli", "skjdfsdkfjsdkf")
} else {
    require("../lib")(process.argv.slice(2))
}