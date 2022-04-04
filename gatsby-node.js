// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;
		
	createRedirect({
    fromPath: `/faq`,
    toPath: `https://wedding.ryanjillian.com/faq/`,
    statusCode: 200,
  });
}
