module.exports = {
  siteMetadata: {
    title: `anmpog.dev`,
    author: {
      name: `Anthony Pogliano`,
      summary: `– a front-end web developer based in Boulder, CO. ⛰`,
    },
    description: `The personal site and blog of Anthony Pogliano.`,
    siteUrl: `https://anmpog.dev`,
    social: {
      twitter: `anmpog`,
    },
    menuLinks: [
      {
        name: 'home',
        link: '/',
      },
      {
        name: 'about',
        link: '/about',
      },
      {
        name: 'projects',
        link: '/projects',
      },
      {
        name: 'blog',
        link: '/blog',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    // `gatsby-plugin-preload-fonts`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Merriweather\:400,700,900`],
        display: `swap`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
