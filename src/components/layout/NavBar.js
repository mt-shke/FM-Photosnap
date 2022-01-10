import Link from "next/link";

const NavBar = (props) => {
	return (
		<nav className={`${props.className ?? ""} `}>
			<ul className="w-full flex flex-col gap-3 items-center text-center mx-auto md:items-start">
				<Link href="/">
					<a>
						<li className="hover:opacity-50"> HOME</li>
					</a>
				</Link>
				<Link href="/stories">
					<a>
						<li className="hover:opacity-50"> STORIES</li>
					</a>
				</Link>
				<Link href="/features">
					<a>
						<li className="hover:opacity-50"> FEATURES</li>
					</a>
				</Link>
				<Link href="/pricing">
					<a>
						<li className="hover:opacity-50"> PRICING</li>
					</a>
				</Link>
			</ul>
		</nav>
	);
};
export default NavBar;
