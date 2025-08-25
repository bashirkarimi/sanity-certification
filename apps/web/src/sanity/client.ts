import { createClient } from "next-sanity";

const client = createClient({
  projectId: "uklo41u5",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});

export default client;
