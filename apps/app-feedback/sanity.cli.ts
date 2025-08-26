import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  app: {
    organizationId: "ouk3ETE6T",
    entry: "./src/App.tsx",
    id: "",
  },
  api: {
    projectId: "uklo41u5",
    dataset: "production",
  },
  server: {
    port: 3335,
  },
  studioHost: "sanity-certification-bashir",
});
