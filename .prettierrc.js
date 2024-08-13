module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'crlf',
  htmlWhitespaceSensitivity: 'ignore',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: 'off',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
        insertPragma: false,
        endOfLine: 'auto',
        singleAttributePerLine: true,
        htmlWhitespaceSensitivity: 'ignore'
      }
    }
  ]
};
