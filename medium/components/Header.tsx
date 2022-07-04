import Link from 'next/link';
import BlackBtn from './BlackBtn';
function Header() {
	return (
		<header className="border-b-2 border-b-black">
			<div
				className="flex px-5 py-4  mx-auto max-w-7xl  justify-between items-center  space-x-5"
			>
				<Link href={'/'}>
					<img
						className="w-48 object-contain cursor-pointer"
						src="https://links.papareact.com/yvf"
						alt="medium"
					/>
				</Link>
				<div className="">
					<div className="hidden mr-5 md:inline-block space-x-5">
						<Link href={''}>Our story</Link>
						<Link href={''}>Membership</Link>
						<Link href={''}>Write</Link>
					</div>
					<Link href={''}>Sign In</Link>
					<BlackBtn text={'Get Started'} />
				</div>
			</div>
		</header>
	);
}

export default Header;
