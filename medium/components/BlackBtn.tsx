
interface PropsType {
	text: string,
	className?:string
}
function BlackBtn(props:PropsType) {
  return (
		<button className={'rounded-full px-4 py-2 ml-5 text-white bg-black '+props.className}>
			{props.text}
		</button>
	);
}

export default BlackBtn