import Searchbar from "./Searchbar"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header>
            <Link to="/">
                <span>.</span>MOV
            </Link>
            <Searchbar />
        </header>
    )
}

export default Nav
