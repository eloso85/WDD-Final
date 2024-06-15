import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./sanity/schemaTypes";

const config = defineConfig({
  name: "default",
  title: "server-webdevducks",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:process.env.SANITY_DATASET,
  apiVersion: "2024-05-26",

  basePath: "/admin",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
export default config;
