import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pediafy',
  tagline: 'Pediafy Services',
  favicon: 'img/favicon.ico',
  url: 'https://pediafy.com',
  baseUrl: '/',
  organizationName: 'pediafy-id', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: 'Pediafy',
      logo: {
        alt: 'Pediafy Logo',
        src: 'img/pediafy-blue.svg',
        srcDark: 'img/pediafy-light.svg',
        width: 'auto',
        height: 'auto',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Services',
          position: 'left',
          items: [
            {
              label: 'Web Development',
              to: '/services/web-development',
            },
            {
              label: 'Social Media Management',
              to: '/services/social-media',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'About Us',
          position: 'left',
          items: [
            {
              label: 'Profile',
              to: '/blog',
            },
            {
              label: 'Contact Us',
              to: '/blog',
            },
            {
              label: 'Showcase',
              to: '/blog',
            },
            {
              label: 'FAQs',
              to: '/blog',
            },
          ],
        },
        {
          label: 'Documentation',
          to: '/docs/intro',
          position: 'left',
        },
        {
          label: 'Articles',
          to: '/blog',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Website Development',
              to: '/docs/intro',
            },
            {
              label: 'Social Media Management',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'About Us',
          items: [
            {
              label: 'Profile',
              to: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Brands',
              to: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Contact Us',
              to: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Documentation',
              to: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
        {
          title: 'Policy',
          items: [
            {
              label: 'Terms',
              to: '/blog',
            },
            {
              label: 'Privacy',
              to: '/blog',
            },
            {
              label: 'Cookie Settings',
              to: '/blog',
            },
            {
              label: 'Guidlines',
              to: '/blog',
            },
          ],
        },
      ],
      logo: {
        className: 'Footer-Logo',
        src: '/img/pediafy-blue.svg',
        srcDark: '/img/pediafy-light.svg',
      },
      copyright: `Made With ❤️ By Pediafy.com`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
