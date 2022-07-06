import Link from 'next/link';
const categories = [
	{ name: 'web-dev', slug: 'web-dev' },
	{ name: 'web-dev', slug: 'web-dev' },
	{ name: 'web-dev', slug: 'web-dev' },
	{ name: 'web-dev', slug: 'web-dev' },
	{ name: 'web-dev', slug: 'web-dev' },
];
const Header = () => {
	return (
		<div className="container border-b  border-black mx-auto flex px-5 justify-between items-center">
			<Link href={'/'}>
				<img className="w-20 cursor-pointer" src="/logo1.png" alt="" />
			</Link>
			<div className="flex-wrap flex justify-end text-white font-semibold text-right">
				{categories.map((categorie: { name: string; slug: string }) => (
					<Link href={`/categories/${categorie.slug}`}>
						<span className="cursor-pointer  p-1 m-1">{categorie.name}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Header;
