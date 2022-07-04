import BlackBtn from './BlackBtn';

function Hero() {
	return (
		<div className="border-b-2  border-b-black">
			<div
				className="px-5 mx-auto max-w-7xl border-b-black"
			>
				<h1 className="text-9xl font-serif py-5">Stay curious.</h1>
				<h4 className="text-2xl my-5 mr-52">
					Discover stories, thinking, and expertise from writers on any topic.
				</h4>
				<BlackBtn className="my-10 ml-0 w-72 text-2xl" text={'Start reading'} />
			</div>
		</div>
	);
}

export default Hero;
