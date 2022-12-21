/** @type { import("@jest/types").Config.InitialOptions } */
module.exports = {
  transform: { "\\.(js|jsx|ts|tsx)$": "@sucrase/jest-plugin" },
  collectCoverageFrom: [
    "tests/**/*.test.ts",
  ],
};
