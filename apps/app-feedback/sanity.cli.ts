import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  app: {
    organizationId: "ouk3ETE6T",
    entry: "./src/App.tsx",
    id: "zofflb2la9tnzmz454dsosel",
  },
  api: {
    projectId: "uklo41u5",
    dataset: "production",
  },
  server: {
    port: 3335,
  },
});
