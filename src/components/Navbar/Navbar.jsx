import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <button><Link to="/">About</Link></button>
                <button><Link to="/skills">Skills</Link></button>
                <button><Link to="/education">Education</Link></button>
                <button><Link to="/experience">Experience</Link></button>
                <button><Link to="/projects">Projects</Link></button>
            </nav>
        </>
    )
}

export default Navbar