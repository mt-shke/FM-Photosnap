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

const Footer = (props) => {
	return (
		<footer className="ctn w-full gap-28 p-10 bg-black text-white">
			<section className="flex flex-col gap-12 w-full items-center">
				<div className="flex-c6">
					<div className="flex items-baseline">
						<Logo className="w-6 overflow-hidden" src={logoIcon} fit="fill" layout="fixed" alt="logo" />
						<h3>PHOTOSNAP</h3>
					</div>
					<div className="flex flex-row gap-2">
						<IconFacebook />
						<IconYoutube />
						<IconTwitter />
						<IconPinterest />
						<IconInstagram />
					</div>
				</div>
				<NavBar className="w-full flex items-center" />
			</section>
			<aside className="flex-c6 items-center w-full">
				<div className="w-full flex justify-center gap-2">
					<h4>GET AN INVITE</h4>
					<IconArrow />
				</div>
				<p className="text-grey opacity-60">Copyright 2019. All Rights Reserved </p>
			</aside>
		</footer>
	);
};
export default Footer;
