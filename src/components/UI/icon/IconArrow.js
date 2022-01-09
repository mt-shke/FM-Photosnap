const IconArrow = (props) => {
	const color = props.black ? "black" : "white";

	return (
		<svg xmlns="http://www.w3.org/2000/svg" stroke={color} fill={color} width={42} height={24} {...props}>
			<path d="M0 7h41.864m-6.436-6 6 6-6 6" fill={color} fillRule="evenodd" stroke={color} />
		</svg>
	);
};

export default IconArrow;
