import { createClient, groq } from 'next-sanity';

const config = {
  projectId: "280tqh8y", // Find or replace with your project's ID
  dataset: "production", // Find or replace with your dataset
  apiVersion: "2024-05-26", // Use a date in YYYY-MM-DD format; it should be today's date or earlier
  useCdn: false // Set to `false` for fresh data in development
};

// Set up the client for fetching data in the getProps functions
export const sanityClient = createClient(config);

// Helper function for use in components for Portable Text etc., not necessary for simple data fetching
// export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up a helper function for generating Image URLs with only the asset reference data
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function to return GROQ
export {groq} 