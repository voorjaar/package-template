import commonjs from "@rollup/plugin-commonjs";
import { defineConfig } from "rollup";
import del from "rollup-plugin-delete";
import dts from "rollup-plugin-dts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { rmSync } from "fs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import pkg from "./package.json" assert { type: "json" };

const name = pkg.name;
const input = "src/index.ts";
const formats = ["cjs", "es"];
const isProduction = process.env.NODE_ENV === "production";

const plugins = [
  json(),
  del({ targets: "dist/*", runOnce: true }),
  commonjs(),
  nodeResolve(),
  typescript({
    exclude: ["tests/*.test.ts"]
  }),
];

const options = formats.map((format) =>
  defineConfig({
    input,
    output: {
      file:
      format === "cjs"
        ? pkg.main
        : format === "es"
          ? pkg.module
          : `dist/${name}-${format}.js`,
      format,
      name,
    },
    plugins,
  })
);

if (isProduction) options.push(defineConfig({
  input: "dist/src/index.d.ts",
  output: {
    file: pkg.types,
    format: "es",
  },
  plugins: [
    dts(),
    {
      name: "copy-types",
      closeBundle() {
        rmSync("./dist/src", { recursive: true, force: true });
      },
    },
  ],
}));

export default options;
