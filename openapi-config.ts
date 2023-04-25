import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "./docs/swagger.yml",
  apiFile: "./src/store/services/emptyApi.ts",
  apiImport: "api",
  hooks: false,
  outputFiles: {
    "./src/store/services/auth.ts": {
      filterEndpoints: [/login/i, /signup/i],
      exportName: "authApi",
    },
    "./src/store/services/order.ts": {
      filterEndpoints: [/order/i],
      exportName: "orderApi",
    },
    "./src/store/services/product.ts": {
      filterEndpoints: [/product/i],
      exportName: "productApi",
    },
  },
};

export default config;
