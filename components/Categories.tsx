import Link from 'next/link';
import React from 'react';
const categories = [
	{ slug: 'web-dev', name: 'web-developement' },
	{ slug: 'web-dev', name: 'science' },
	{ slug: 'web-dev', name: 'food' },
	{ slug: 'web-dev', name: 'politics' },
];
const Categories = () => {
	return (
		<div className="bg-white shadow-2xl rounded-2xl p-5 mb-10">
			<h2 className="font-bold pb-5 text-2xl">Categories</h2>
			<div className="">
				{categories.map((c) => (
					<Link href={c.slug}>
						<span className="block my-1 border-b py-1 transition duration-200 hover:text-pink-700 cursor-pointer">
							{c.name}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Categories;
