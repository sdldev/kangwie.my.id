import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightBlog from 'starlight-blog';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://kangwie.my.id',
  integrations: [
  // Add the Starlight Blog integration.
  starlightBlog(), starlight({
    // Configure the Starlight Blog component overrides.
    components: {
      MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
      Sidebar: 'starlight-blog/overrides/Sidebar.astro',
      ThemeSelect: 'starlight-blog/overrides/ThemeSelect.astro'
    },
    sidebar: [{
      label: 'Dasar',
      collapsed: true,
      items: [
        {
        label: 'start',
        link: '/dasar/start/'
        },
        {
          label: 'Markdown',
          link: '/dasar/markdown/'
        }
      ]
    }, {
      label: 'Astro',
      collapsed: true,
      items: [{
        label: 'Start',
        link: '/astro/start/'
      }, {
        label: 'Install',
        link: '/astro/install/'
      }]
    }],
    title: 'k@ngwie',
    social: {
      'x.com': 'https://twitter.com/sidolapak',
      github: 'https://github.com/sdldev',
    },
    customCss: [
      // Path relative ke custom CSS file Anda
      './src/styles/custom.css',
    ],

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2
    }
  })],
  output: "server",
  adapter: cloudflare({ mode: 'directory' }),
});