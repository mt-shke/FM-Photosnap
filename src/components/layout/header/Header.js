import logoIcon from "/public/assets/shared/desktop/logo.svg";
import hamburgerIcon from "/public/assets/shared/mobile/menu.svg";
import Logo from "../../UI/icon/Logo";
import Icon from "../../UI/icon/Icon";

const Header = (props) => {
	return (
		<header className="ctn w-full flex justify-between p-6">
			<Logo src={logoIcon} alt="logo" />
			<Icon src={hamburgerIcon} alt="icon menu" />
		</header>
	);
};
export default Header;
