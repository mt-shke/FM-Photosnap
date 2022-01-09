import Link from "next/link";

const NavBar = (props) => {
	return (
		<nav className={`${props.className ?? ""} `}>
			<ul className="w-full flex flex-col gap-4 items-center text-center mx-auto">
				<li> HOME</li>
				<li> STORIES</li>
				<li> FEATURES</li>
				<li> PRICING</li>
			</ul>
		</nav>
	);
};
export default NavBar;
