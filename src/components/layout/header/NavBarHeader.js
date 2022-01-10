import Link from "next/link";

const NavBarHeader = (props) => {
	return (
		<nav className={`${props.className ?? ""} `}>
			<ul className="w-full flex flex-col gap-2 items-center mx-auto text-center font-bold md:flex-row md:gap-10">
				<Link href="/stories">
					<a>
						<li className="hover:opacity-60"> STORIES</li>
					</a>
				</Link>
				<Link href="/features">
					<a>
						<li className="hover:opacity-60"> FEATURES</li>
					</a>
				</Link>
				<Link href="/pricing">
					<a>
						<li className="hover:opacity-60"> PRICING</li>
					</a>
				</Link>
			</ul>
		</nav>
	);
};
export default NavBarHeader;
