import logoIcon from "/public/assets/shared/desktop/logo.svg";
import Logo from "../../UI/icon/Logo";
import NavBar from "../NavBar";
import {
	IconInstagram,
	IconPinterest,
	IconFacebook,
	IconYoutube,
	IconTwitter,
} from "../../UI/icon/IconSocials";
import IconArrow from "../../UI/icon/IconArrow";
import Link from "next/link";

const Footer = (props) => {
	return (
		<footer className="w-full bg-black text-white">
			<div className="ctn flex flex-col gap-28 p-10 md:flex-row md:py-20">
				<section className="flex flex-col gap-12 w-full items-center md:flex-row md:gap-32">
					<div className="flex-c6 md:h-full md:justify-between">
						<Link href="/">
							<div className="flex items-baseline">
								<Logo className="w-6 overflow-hidden" src={logoIcon} fit="fill" layout="fixed" alt="logo" />
								<h3>PHOTOSNAP</h3>
							</div>
						</Link>
						<div className="flex flex-row gap-2 lg:gap-4">
							<IconFacebook />
							<IconYoutube />
							<IconTwitter />
							<IconPinterest />
							<IconInstagram />
						</div>
					</div>
					<NavBar className="w-full flex items-center" />
				</section>
				<aside className="flex-c6 justify-center items-center w-full md:justify-between md:items-end">
					<div className="w-full flex justify-center gap-2 md:justify-end">
						<h4>GET AN INVITE</h4>
						<IconArrow />
					</div>
					<p className="text-grey opacity-60">Copyright 2019. All Rights Reserved </p>
				</aside>
			</div>
		</footer>
	);
};
export default Footer;
