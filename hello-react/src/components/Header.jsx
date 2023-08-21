import logo from "./../assets/ironhack-logo-xs.png";
import menu from "./../assets/menu-top-xs.png"

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="ironhack-logo-xs" />
            <img src={menu} alt="menu-top-xs" />
        </header>
    )
}

export default Header