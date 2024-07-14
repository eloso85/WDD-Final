import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { myStructure } from "./sanity/deskStructure";
import {codeInput} from '@sanity/code-input';



import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;



const config = defineConfig({
  name: "default",
  title: "server-webdevducks",

  projectId: projectId,
  dataset: dataset,
  apiVersion: "2024-05-26",

  basePath: "/admin",

  plugins: [structureTool({
    structure: myStructure
  }), visionTool(),codeInput()],

  schema: {
    types: schemaTypes,
  },
});
export default config;
