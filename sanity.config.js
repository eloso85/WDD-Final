import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

console.log(projectId);
console.log(dataset);

const config = defineConfig({
  name: "default",
  title: "server-webdevducks",

  projectId: projectId,
  dataset:dataset,
  apiVersion: "2024-05-26",

  basePath: "/admin",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
export default config;
