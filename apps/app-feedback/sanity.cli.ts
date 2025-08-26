import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  app: {
    organizationId: "ouk3ETE6T",
    entry: "./src/App.tsx",
    id: "g1wukw4bx3ez8ruiej53y5am",
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
