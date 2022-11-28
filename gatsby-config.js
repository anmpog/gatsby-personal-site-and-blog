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
        name: 'blog',
        link: '/blog',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
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
        display: `swap`,
      },
    },
  ],
}
