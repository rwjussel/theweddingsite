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
        }/*,
        {
          resolve: 'gatsby-plugin-newrelic',
          options: {
            configs: {
              production: {
                instrumentationType: 'proAndSPA',
                accountId: '439836',
                trustKey: '439836',
                agentID: '749346911',
                licenseKey: 'c92a5e5e44',
                applicationID: '749346911',
                beacon: 'bam.nr-data.net',
                errorBeacon: 'bam.nr-data.net'
              }
            }
          }
        }*/
      ]
}
