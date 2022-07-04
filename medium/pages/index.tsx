
import Head from 'next/head';
import Discover from '../components/Discover';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { sanityClient } from '../sanity';
import { Post } from '../typings';
import SinglePost from '../components/SinglePosr';

interface Props {
	posts: [Post];
}
export default function Home({ posts }: Props) {

	return (
		<div >
			<Head>
				<title>Medium Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="bg-yellow-400 ">
				<Header />
				<Hero />
			</div>
			<main className="flex md:flex-col sm:flex-col px-5 justify-between mx-auto max-w-7xl">
				{/* POSTS */}
				<div className="flex md:w-full md:order-2 sm:w-full sm:order-2 justify-center flex-col w-7/12">
					{posts.map((post) => (
						<SinglePost key={post._id} post={post} />
					))}
				</div>
				{/* ASIDE */}
				{/* <Discover /> */}
			</main>
		</div>
	);
}

export const getServerSideProps = async () => {
	const query = `*[_type == "post"]{
		_id,
		title,
		_createdAt,
		author -> {
			name,
			image
		},
		mainImage,
		description,
		slug
	}`;

	const posts = await sanityClient.fetch(query).then((resp) => resp);

	return { props: { posts } };
};
