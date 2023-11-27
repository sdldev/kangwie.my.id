// import { docsSchema } from '@astrojs/starlight/schema'
import { defineCollection } from 'astro:content'
import { docsAndBlogSchema } from 'starlight-blog/schema'

export const collections = {
  // Use the Starlight Blog integration schema.
  docs: defineCollection({ schema: docsAndBlogSchema }),

}