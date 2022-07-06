import Head from 'next/head';
import { Categories, PostCard } from '../components';
import { getPosts } from '../services/PostCard';
import { Post } from '../typings';
interface Props {
	posts: [Post];
}

const Home = ({posts}:Props) => {

	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>DUH-Blog</title>
			</Head>
			<main className="container  grid grid-cols-1 lg:grid-cols-12 mx-auto p-5">
				{/* POSTS */}
				<div className="col-span-1 lg:col-span-8">
					{posts.map((post) => (
						<PostCard key={post.node.id} post={post} />
					))}
				</div>

				{/* ASIDE */}
				<aside className="lg:sticky relative col-span-1 lg:col-span-4">
					{/* CATEGORIES */}
					<Categories />
					<Categories />
					{/* RELATED POSTS */}
					<div></div>
				</aside>
			</main>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const posts = (await getPosts()) || []


	return {
		props: {
			posts,
		},
	};
}
