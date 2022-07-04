import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from '../../typings';
import { useForm, SubmitHandler } from 'react-hook-form';
// icons
import { AiFillStar, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { BiLink } from 'react-icons/bi';
import Link from 'next/link';
import PortableText from 'react-portable-text';
import BlackBtn from '../../components/BlackBtn';
import { useState } from 'react';
interface Props {
	post: Post;
}
type Inputs = {
	_id: string;
	name: string;
	email: string;
	comment: string;
};
function PostDesc({ post }: Props) {
	const [submited, setSubmited] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		await fetch('/api/createComment', {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then(() => setSubmited(!submited))
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<Header />
			<main className=" px-5 mx-auto max-w-3xl mt-10">
				{/* USER INFO */}
				<div className="flex justify-between items-center">
					<Link href="/user/">
						<div className="flex gap-3 items-center cursor-pointer">
							<img
								className="rounded-full h-14"
								src={post.author.image && urlFor(post.author.image).url()}
								alt={post.author.name}
							/>
							<div className="flex flex-col gap-1">
								<span className="">{post.author.name}</span>
								<span className="text-gray-500 text-sm">
									{new Date(post._createdAt).toLocaleDateString('en-us', {
										month: 'short',
										day: 'numeric',
										hour: '2-digit',
										minute: '2-digit',
									})}{' '}
									<AiFillStar className="inline ml-3" />
								</span>
							</div>
						</div>
					</Link>
					<div className="flex justify-between items-center gap-5 ">
						<AiOutlineTwitter className="text-gray-500 hover:text-black transition-all duration-200 text-xl ease-in-out cursor-pointer" />
						<BsFacebook className="text-gray-500 hover:text-black transition-all duration-200 text-xl ease-in-out cursor-pointer" />
						<AiFillLinkedin className="text-gray-500 hover:text-black  text-xl transition-all duration-200 ease-in-out cursor-pointer" />
						<BiLink className="text-gray-500 hover:text-black text-xl transition-all duration-200 ease-in-out cursor-pointer" />
						<MdOutlineBookmarkAdd className="text-gray-500 text-3xl hover:text-black transition-all duration-200 ease-in-out cursor-pointer" />
					</div>
				</div>
				<h1 className="text-5xl my-7">{post.title}</h1>
				<img
					className="w-full"
					src={post.mainImage ? urlFor(post.mainImage.asset._ref).url() : ''}
					alt={post.author.name}
				/>
				<p className="text-gray-600 mt-6">
					{post.body && (
						<PortableText
							content={post.body}
							dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
							projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
						/>
					)}
				</p>
				{submited ? (
					<div className=" mx-auto  w-full p-5 text-white bg-yellow-500 border-solid mt-20 border-2 rounded-lg px-4">
						<h1 className="font-bold text-4xl pb-3">Thank you for submiting</h1>
						<p className="text-xl">
							Once it has been approved, it will apear below!
						</p>
					</div>
				) : (
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-20 flex flex-col gap-5 mx-auto w-6/12"
					>
						<input
							type={'hidden'}
							{...register('_id')}
							value={post._id}
							name=")id"
						/>
						<label className="w-full">
							<span className="text-gray-800">Name</span>
							<input
								{...register('name', {
									required: 'Required',
								})}
								className="shadow w-full px-3 py-4 "
								placeholder="Enter Your Name"
								type="text"
							/>
						</label>
						<label className="w-full">
							<span className="text-gray-800">Email</span>
							<input
								{...register('email', {
									required: 'Required',
								})}
								className="shadow w-full px-3 py-4 "
								placeholder="Enter Your Email"
								type="email"
							/>
						</label>
						<label className="w-full">
							<span className="text-gray-800">Comment</span>
							<textarea
								{...register('comment', {
									required: 'Required',
								})}
								className="shadow w-full px-3 py-4"
								placeholder="Write your Comment"
								rows={8}
							/>
						</label>

						<BlackBtn text="Submit" />
						<div className="gap-4 text-red-700 flex flex-col ">
							<ul className="list-disc">
								{errors.name && <li> name is required</li>}
								{errors.email && <li> email is required</li>}
								{errors.comment && <li> comment is required</li>}
							</ul>
						</div>
					</form>
				)}
				{/* COMMENTS */}
				<div className="shadow my-10 px-5">
					<h1 className="text-2xl  font-bold">Comments</h1>
					<hr className="mb-3 " />
					{/* render the commetns */}
					<ul>
						{post.comments.map((c) => (
							<li key={c._id}>
								<span className="text-yellow-500 pr-2">{c.name}</span>
								{c.comment}
							</li>
						))}
					</ul>
				</div>
			</main>
		</div>
	);
}

export default PostDesc;
// we find the paths for the existing pages and then we get the data with getStaticProps
export const getStaticPaths = async () => {
	const query = `
    *[_type=="post"]{
      _id,
      slug {
        current
      }
      
    }
  `;
	const posts = await sanityClient.fetch(query);
	const paths = posts.map((post: Post) => ({
		params: {
			slug: post.slug.current,
		},
	}));
	return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const query = `
	*[_type == "post" && slug.current==$slug][0] {
		_id,
		title,
		_createdAt,
		author -> {
			name,
			image
		},
		"comments" :*[
			_type=="comment" && post._ref ==^._id && approved==true
		],
		mainImage,
		description,
		slug,
    body
	}`;
	const post = await sanityClient.fetch(query, {
		slug: params?.slug,
	});
	if (!post) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			post,
			// constantly update the website if any changes have made :
			revalidate: 120, // after 60s it will update the old cached version
		},
	};
};
