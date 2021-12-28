module.exports = {
  siteMetadata: {
    title: "Burger Palace",
    description: "Burger Palace was founded in 2021 by founder, Mohammed Oulad m'hand. AA continues to be at the forefront of food by establishing the best food of our country on a holistic level -- and setting trends within the industry.",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://burgerpalace.local/graphql",
      },
    },
  ],
};