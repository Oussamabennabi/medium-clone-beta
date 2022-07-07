import Head from 'next/head';
import { Categories, PostCard } from '../components';
import RelatedPosts from '../components/RelatedPosts';
import { getCategories, getPosts, getRecentPosts } from '../services';
import { Categorie, Post, RelatedPost } from '../typings';
interface Props {
	posts: [Post];
}
const Home = ({ posts }: Props) => {
	return (
		<div  className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>DUH-Blog</title>
			</Head>
			<main className="container grid grid-cols-1 lg:grid-cols-12 mx-auto p-5">
				{/* POSTS */}
				<div className="col-span-1 lg:col-span-8">
					{posts.map((post) => (
						<PostCard key={post.node.id} post={post} />
					))}
				</div>

				{/* ASIDE */}
				<aside className=" col-span-1 lg:col-span-4">
					{/* CATEGORIES */}
					<div className="lg:sticky relative top-8">
						<RelatedPosts />
						<Categories />
					</div>
					{/* RELATED POSTS */}
				</aside>
			</main>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return {
		props: {
			posts,
		},
	};
}
