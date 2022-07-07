import { GetStaticPaths, GetStaticProps, GetStaticPropsResult } from 'next';
import React from 'react';
import {
	Categories,
	CommentsForm,
	Comments,
	PostDetailPage,
	RelatedPosts,
	AuthorDetail,
} from '../../components';

import {
	getCategories,
	getPostDetails,
	getPosts,
	getRecentPosts,
} from '../../services';
import { Categorie, Post, PostDetail, RelatedPost } from '../../typings';

interface Props {
	postDetails: PostDetail;
	recentPosts: [RelatedPost];
	categories: [Categorie];
}
const PostDetails = ({ postDetails }: Props) => {

	return (
		<main className="container grid grid-cols-1 lg:grid-cols-12 mx-auto p-5">
			<div className="col-span-1 lg:col-span-8">
			<PostDetailPage post={postDetails} />
			<AuthorDetail author={postDetails.author} />
			<CommentsForm slug={postDetails.slug} />
			<Comments slug={postDetails.slug} />

			</div>

			{/* ASIDE */}
			<aside className=" col-span-1 lg:col-span-4">
				{/* CATEGORIES */}
				<div className="lg:sticky relative top-8">
					<RelatedPosts slug={postDetails.slug} categories={ postDetails.categories.map(c=>c.slug)} />
					<Categories />
				</div>
				{/* RELATED POSTS */}
			</aside>
		</main>
	);
};

export default PostDetails;
export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await (getPosts() || []);

	return {
		paths: posts.map((post: Post) => ({
			params: {
				slug: post.node.slug,
			},
		})),
		fallback: 'blocking',
	};
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postDetails = await getPostDetails(params.slug);
	// const recentPosts = (await getRecentPosts()) || [];
	// const categories = (await getCategories()) || [];

	return {
		props: {
			postDetails,
			// recentPosts,
			// categories,
		},
	};
};
