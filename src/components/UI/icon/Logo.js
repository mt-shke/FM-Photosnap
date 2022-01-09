import logo from "/public/assets/shared/desktop/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = (props) => {
	return (
		<span className={`icon-logo relative ${props.className ?? ""}`} onClick={props.onClick}>
			<Link href="/">
				<a>
					<Image
						className={props.icss}
						objectFit={props.fit ?? "contain"}
						src={logo}
						layout={props.layout ?? "fill"}
						alt="logo"
					/>
				</a>
			</Link>
		</span>
	);
};
export default Logo;
