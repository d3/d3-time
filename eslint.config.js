import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["test/**/*"],
    languageOptions: {
      globals: globals.mocha
    }
  }
];
