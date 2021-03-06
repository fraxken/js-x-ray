// Import Node.js Dependencies
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

// Import Third-party Dependencies
import test from "tape";

// Import Internal Dependencies
import { runASTAnalysis, CONSTANTS } from "../index.js";
import { getWarningKind } from "./utils/index.js";

// CONSTANTS
const { Warnings } = CONSTANTS;
const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURE_PATH = join(__dirname, "fixtures/obfuscated");

test("should detect 'jsfuck' obfuscation", (tape) => {
  const trycatch = readFileSync(join(FIXTURE_PATH, "jsfuck.js"), "utf-8");
  const { warnings } = runASTAnalysis(trycatch);

  tape.strictEqual(warnings.length, 1);
  tape.deepEqual(getWarningKind(warnings), [Warnings.obfuscatedCode].sort());
  tape.strictEqual(warnings[0].value, "jsfuck");
  tape.end();
});

// test("should detect 'morse' obfuscation", (tape) => {
//   const trycatch = readFileSync(join(FIXTURE_PATH, "morse.js"), "utf-8");
//   const { warnings } = runASTAnalysis(trycatch);

//   tape.strictEqual(warnings.length, 1);
//   tape.deepEqual(getWarningKind(warnings), [Warnings.obfuscatedCode].sort());
//   tape.strictEqual(warnings[0].value, "morse");
//   tape.end();
// });

test("should detect 'jjencode' obfuscation", (tape) => {
  const trycatch = readFileSync(join(FIXTURE_PATH, "jjencode.js"), "utf-8");
  const { warnings } = runASTAnalysis(trycatch);

  tape.strictEqual(warnings.length, 1);
  tape.deepEqual(getWarningKind(warnings), [Warnings.obfuscatedCode].sort());
  tape.strictEqual(warnings[0].value, "jjencode");
  tape.end();
});

test("should detect 'freejsobfuscator' obfuscation", (tape) => {
  const trycatch = readFileSync(join(FIXTURE_PATH, "freejsobfuscator.js"), "utf-8");
  const { warnings } = runASTAnalysis(trycatch);

  tape.strictEqual(warnings.length, 3);
  tape.deepEqual(getWarningKind(warnings), [
    Warnings.encodedLiteral, Warnings.encodedLiteral, Warnings.obfuscatedCode
  ].sort());
  tape.strictEqual(warnings[2].value, "freejsobfuscator");
  tape.end();
});

test("should detect 'obfuscator.io' obfuscation (with hexadecimal generator)", (tape) => {
  const trycatch = readFileSync(join(FIXTURE_PATH, "obfuscatorio-hexa.js"), "utf-8");
  const { warnings } = runASTAnalysis(trycatch);

  tape.strictEqual(warnings.length, 1);
  tape.deepEqual(getWarningKind(warnings), [
    Warnings.obfuscatedCode
  ].sort());
  tape.strictEqual(warnings[0].value, "obfuscator.io");
  tape.end();
});
