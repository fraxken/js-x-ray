"use strict";

// Require Internal Dependencies
const helpers = require("../utils");
const { Warnings } = require("../ASTStats");

// Require Third-party Dependencies
const safeRegex = require("safe-regex");

const breakOnMatch = false;

// Search for Regex Object constructor.
// then we use the safe-regex package to detect whether or not regex is safe!
function validateNode(node) {
    return [helpers.isRegexConstructor(node) && node.arguments.length > 0];
}

function main(node, options) {
    const { analysis } = options;

    const arg = node.arguments[0];
    const pattern = helpers.isLiteralRegex(arg) ? arg.regex.pattern : arg.value;

    if (!safeRegex(pattern)) {
        analysis.stats.addWarning(Warnings.unsafeRegex, pattern, node.loc);
    }
}

module.exports = { validateNode, main, breakOnMatch };