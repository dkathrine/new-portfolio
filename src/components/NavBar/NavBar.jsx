import './NavBar.css';
import { /* useState, */ useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { House, User, Folder } from "lucide-react";

const NavBar = ({ active, handleMenuToggle }) => {
    /* 2 comments below are the state & function to handle open&close of burger menu onClick */
    /* const [active, setActive] = useState(false); */
    /*  const handleMenuToggle = () => {
        setActive(!active);
     }; */

    /* declared useLocation as location */
    const location = useLocation();
    /* declared useNavigate as navigate */
    const navigate = useNavigate();
    /* set up a switch case to dynamically switch the heading based on the location on the website */
    let heading;
    const projectMatch = location.pathname.match(/^\/project\/\d+$/);

    if (projectMatch) {
        heading = 'Project';
    } else {
        switch (location.pathname) {
            case '/':
                heading = 'Home';
                break;
            case '/about':
                heading = 'About Me';
                break;
            case '/projects':
                heading = 'Projects';
                break;
            case '/contact':
                heading = 'Contact';
                break;
            case '/project/2':
                heading = 'Project';
                break;
            default:
                heading = 'Home';
                break;
        }
    }

    useEffect(() => {
        active ?
            document.body.classList.add('menu-open') : document.body.classList.remove('menu-open')

    }, [active]);

    return (
        <>
            <nav className='nav_bar'>
                {/* split the navbar into left & right side */}
                <section className='nav_left'>
                    <a
                        title='Portfolio Kathrine Beuth'
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/');
                        }}>
                        <img src="/logo-purple.png" alt="Logo" title='Logo' />
                        <p></p>
                    </a>
                </section>

                <div className='nav_middle'>
                    <p>{heading}</p>
                </div>

                {/* right side */}
                <section className='nav_right'>
                    <a
                        href='/'
                        title="Home"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/");
                        }}
                        className="text-xs nav_hover"
                    >
                        <House size={32} />
                        <p>Home</p>
                    </a>

                    <a
                        href='/about'
                        title="About Me"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/about");
                        }}
                        className="text-xs nav_hover"
                    >
                        <User size={32} />
                        <p>About Me</p>
                    </a>

                    <a
                        href='/projects'
                        title="Projects"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/projects");
                        }}
                        className="text-xs nav_hover"
                    >
                        <Folder size={32} />
                        <p>Projects</p>
                    </a>
                </section>
            </nav>

            {/* burger menu - "icon" */}
            <section className={`burger_menu_button ${active ? 'active' : ''}`} onClick={handleMenuToggle}>
                <svg className={`ham hamRotate ham1 ${active ? 'active' : ''}`} viewBox="0 0 100 100" width="80" /* onClick={handleMenuToggle} */>
                    <path
                        className="line top"
                        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                    <path
                        className="line middle"
                        d="m 30,50 h 40" />
                    <path
                        className="line bottom"
                        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                </svg>
            </section>

            <div className='kb_logo_mobile_container'>
                <img
                    className='kb_logo'
                    src="/logo-purple.png"
                    alt="Logo"
                    title='Logo'
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/");
                    }}
                />
            </div>

            {/* burger menu - links */}
            <nav className={`burger_menu ${active ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a
                            title="Home"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/");
                                handleMenuToggle();
                            }}
                            className=""
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            title="About Me"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/about");
                                handleMenuToggle();
                            }}
                            className=""
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            title="Projects"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/projects");
                                handleMenuToggle();
                            }}
                            className=""
                        >
                            Projects
                        </a>
                    </li>
                </ul>
                <div className='kb_logo_mobile_container'>
                    <img className='kb_logo_bmenu' src="/logo-purple.png" alt="Logo" title='Logo' />
                </div>
            </nav>
        </>
    )
}

export default NavBar