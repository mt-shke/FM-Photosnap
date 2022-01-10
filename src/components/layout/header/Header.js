import logoIcon from "/public/assets/shared/desktop/logo.svg";
import hamburgerIcon from "/public/assets/shared/mobile/menu.svg";
import closeIcon from "/public/assets/shared/mobile/close.svg";
import Logo from "../../UI/icon/Logo";
import Icon from "../../UI/icon/Icon";
import { useState } from "react";
import Button from "../../UI/button/Button";
import Background from "../../UI/background/Background";
import NavBarHeader from "./NavBarHeader";

const Header = (props) => {
	const [menu, setMenu] = useState(false);

	return (
		<header className="ctn relative h-20 z-50 w-full flex items-center justify-between p-6 bg-white md:justify-center">
			<Logo className="z-50 md:mr-auto md:ml-0" src={logoIcon} alt="logo" />
			<NavBarHeader className="hidden md:block" />
			<Button className="hidden md:block md:w-fit md:mr-0 md:ml-auto">get an invite</Button>

			{!menu && (
				<Icon
					className="relative z-50 md:hidden"
					onClick={() => setMenu(true)}
					src={hamburgerIcon}
					alt="icon menu"
				/>
			)}
			{menu && (
				<Icon
					className="relative z-50 md:hidden"
					onClick={() => setMenu(false)}
					src={closeIcon}
					alt="icon close"
				/>
			)}
			{menu && (
				<div className="absolute z-50 w-full mx-auto p-8 -bottom-[230px] left-0 bg-white  md:hidden">
					<NavBarHeader />
					<hr className="my-4 md:hidden" />
					<Button className="w-full">get an invite</Button>
				</div>
			)}
			{menu && (
				<Background className="fixed z-40 inset-0 bg-black opacity-0" onClick={() => setMenu(false)} />
			)}
		</header>
	);
};
export default Header;
