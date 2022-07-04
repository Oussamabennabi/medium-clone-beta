import { createClient, createCurrentUserHook, } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2022-03-25",
  useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config)

// to extract the image url :

export const urlFor = (source) => imageUrlBuilder(config).image(source);

// helper function for using the current user :

export const currentUser = createCurrentUserHook(config)


