module.exports = {
  siteMetadata: {
        siteUrl: `https:/www.ryanjillian.com`,
        title: "Jillian & Ryan",
        description: "23 Years in the making...",
        author: "Ryan Jussel"
        
    },
    plugins: [
        {
          resolve: `@agney/gatsby-theme-wedding`,
          options: {
            contentPath: "occasion", // Tell the theme where your data is.
           // basePath: "/event" // Tell the theme which URL to render the theme at.
          }
        }
      ]
}
