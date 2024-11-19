/**
 * Lawrence ESLint 规则
 *
 * 依赖版本：
 *   eslint ^8.45.0
 *   @babel/core ^7.22.9
 *   @babel/eslint-parser ^7.22.9
 *   @babel/preset-react ^7.22.5
 *   eslint-plugin-react ^7.33.0
 *   vue-eslint-parser ^9.3.1
 *   eslint-plugin-vue ^9.15.1
 *   @typescript-eslint/parser ^6.2.0
 *   @typescript-eslint/eslint-plugin ^6.2.0
 *   eslint-plugin-react-hooks ^5.0.0
 *   eslint-plugin-import ^2.31.0
 *
 */
module.exports = {
  plugins: ["import"],
  rules: {
    /**
     * Expected 1 empty line after import statement not followed by another import
     */
    "import/newline-after-import": "error",
    /**
     * 启用 import/named 规则
     */
    "import/named": "error",
  },
};
