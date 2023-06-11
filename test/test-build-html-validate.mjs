// Documentation: https://html-validate.org/dev/using-api.html

import { FileSystemConfigLoader, HtmlValidate, formatterFactory } from "html-validate";
import glob from "glob";

const loader = new FileSystemConfigLoader(); // Load html-validate config from .htmlvalidate.json
const htmlValidate = new HtmlValidate(loader);
const formatter = formatterFactory("text");
const targets = glob.sync("./build/**/*.html");
const startTime = Date.now();
const timeLimit = 60; // seconds
targets.forEach((target) => {
  if (Date.now() - startTime > timeLimit * 1000) {
    console.log("Time limit exceeded, exiting");
    process.exit(1);
  }
  const report = htmlValidate.validateFile(target);
  if (!report.valid) {
    console.log(formatter(report.results));
  } else {
    //emoji
    console.log("✅ " + target);
  }
});
