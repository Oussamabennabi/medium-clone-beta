import { Post } from '../typings';
import { AiFillStar } from 'react-icons/ai';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { urlFor } from '../sanity';
import { useEffect } from 'react';
import Link from 'next/link';

interface Props {
	post: Post;
	key?: string;
}
function SinglePost({ post, key }: Props) {
	console.log(post?.author?.image);
	return (
		<article
			key={key}
			className="flex py-1 my-4 items-center justify-between gap-2"
		>
			<div className="flex-1">
				{/* USER INFO */}
				<Link href={`/user/`}>
					<div className="my-2 w-auto flex gap-2 items-center cursor-pointer">
						<img
							className="rounded-full w-7"
							src={post.author.image && urlFor(post.author.image).url()}
						/>
						<span className="">{post.author.name}</span>
					</div>
				</Link>
				{/* TITLE OF POST*/}
				<Link href={`/post/${post.slug.current}`}>
					<h2 className="py-1 cursor-pointer font-bold text-2xl ">
						{post.title}
					</h2>
				</Link>
				{/* DESCRIPTION OF POST */}
				<Link href={`/post/${post.slug.current}`}>
					<div className="py-1 text-gray-500 cursor-pointer">
						{post.description}
					</div>
				</Link>
				{/* POST INFO */}

				<div className="flex py-1 justify-between">
					<div className="text-gray-500 text-xs">
						{new Date(post._createdAt).toLocaleDateString('en-us', {
							month: 'short',
							day: 'numeric',
							hour: "2-digit",
							minute:"2-digit"
						})}
						·{/* CATEGORY */}
						<span className="">
							<span className="rounded-full hover:bg-gray-300 transition-all cursor-pointer bg-gray-100  px-2 py-1 ml-2">
								Production
							</span>
							<AiFillStar className="ml-3 inline" />
						</span>
					</div>
					<div>
						<MdOutlineBookmarkAdd className="cursor-pointer text-2xl" />
					</div>
				</div>
			</div>
			<Link href={`/post/${post.slug.current}`}>
				<div className=" cursor-pointer max-w-xs w-full justify-center flex items-center h-full  relative">
					<img
						className="w-full min-w-fit"
						src={post.mainImage ? urlFor(post.mainImage.asset._ref).url() : ''}
					/>
				</div>
			</Link>
		</article>
	);
}

export default SinglePost;
