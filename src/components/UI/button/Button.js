const Button = (props) => {
	const style =
		props.color === "white"
			? "bg-white text-black hover:underline"
			: "bg-black text-white hover:bg-grey hover:text-black";

	return (
		<button
			disabled={props.disabled ?? false}
			type={props.type ?? ""}
			onClick={props.onClick}
			className={`${
				props.className ?? "w-fit"
			} ${style} text-[14px] leading-[30px] tracking-[3px] uppercase font-bold py-2 px-6 `}
		>
			{props.children}
		</button>
	);
};
export default Button;
