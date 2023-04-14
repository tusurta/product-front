import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "./docs/swagger.yml",
  apiFile: "./src/store/services/emptyApi.ts",
  apiImport: "api",
  hooks: true,
  outputFiles: {
    "./src/store/services/user.ts": {
      filterEndpoints: [/user/i],
    },
    "./src/store/services/order.ts": {
      filterEndpoints: [/order/i],
    },
    "./src/store/services/pet.ts": {
      filterEndpoints: [/pet/i],
    },
  },
};

export default config;
