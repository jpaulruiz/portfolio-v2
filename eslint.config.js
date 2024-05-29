import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import * as vueEslintParser from "vue-eslint-parser"

export default [
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  { 
    languageOptions: { 
      globals: {
        ...globals.browser, ...globals.node
      },
      parser: vueEslintParser,
      parserOptions: {
        parser: tseslint.parser
      }
    },
    rules: {
      'vue/multi-word-component-names': 0
    }
  }
];