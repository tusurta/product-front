// .eslintrc.json
export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "airbnb-base", "plugin:prettier/recommended"],
  rules: {
    "no-console": "off",
  },
  ignorePatterns: ["/node_modules/", "/dist/"],
};
