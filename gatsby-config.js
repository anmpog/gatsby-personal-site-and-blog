require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `anmpog.dev`,
    author: {
      name: `Anthony Pogliano`,
      summary: `– a web developer based in Boulder, CO. ⛰`,
    },
    description: `The personal site and blog of Anthony Pogliano.`,
    siteUrl: `https://anmpog.dev`,
    social: {},
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'blog',
        link: '/blog',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-transformer-mdx`,
      options: {
        pagesPath: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anmpog.dev`,
        short_name: `anmpog.dev`,
        start_url: `/`,
        icon: `src/static/mountain-favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/Layout`),
      },
    },
  ],
}
