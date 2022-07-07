import { request, gql } from 'graphql-request';
import { Categorie } from '../typings';

const graphqlAPI: string = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			postsConnection {
				edges {
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredPost
						featuredPhoto {
							url
						}
						categories {
							slug
							name
						}
					}
				}
			}
		}
	`;

	const results = await request(graphqlAPI, query);
	return results.postsConnection.edges;
};

export const getRecentPosts = async () => {
	const query = gql`
		query GetPostDetails {
			posts(orderBy: createdAt_DESC, last: 3) {
				title
				id
				featuredPhoto {
					url
				}
				createdAt
				slug
			}
		}
	`;
	const results = await request(graphqlAPI, query);
	return results.posts;
};
export const getSimilarPosts = async (
	categories: string[]|undefined,
	slug: string
) => {
	const query = gql`
		query GetPostDetails($slug: String!, $categories: [String!]) {
			posts(
				where: {
					slug_not: $slug
					AND: { categories_some: { slug_in: $categories } }
				}
				last: 3
			) {
				title
				id
				featuredPhoto {
					url
				}
				createdAt
				slug
			}
		}
	`;
	const results = await request(graphqlAPI, query, { categories, slug });


	return results.posts;
};

export const getCategories = async () => {
	const query = gql`
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query);

	return result.categories;
};
export const getPostDetails = async (slug: string|undefined) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				content {
					raw 
				}
				author {
					bio
					name
					id
					photo {
						url
					}
				}
				createdAt
				slug
				title
				excerpt

				featuredPhoto {
					url
				}
				categories {
					slug
					name
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug });

	return result.post;
};
