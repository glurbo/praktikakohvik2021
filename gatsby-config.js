module.exports = {
  siteMetadata: {
    title: `Praktikakohvik 2021`,
    description: `TalTech Praktikakohvik 2021 Discordis`,
    author: `Germo Linder`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/content/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-plugin-recaptcha`,
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: false,
         defer: false,
         args: `?onload=onloadCallback&render=6Lda10UaAAAAAO6CbkZsichV5pPiDwxjDY58ZHE7`,
      },
   },
  ],
};
