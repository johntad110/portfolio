import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const Header = ({ onWorksClicked }) => {
    const [scroll, setScroll] = useState(false)
    const [showNavItems, setShowNavItems] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <nav className={`z-20 black h-14 w-full px-4 py-2 fixed flex justify-between ${scroll ? 'glassmorphism ' : ''
                }`}>
                <div className="w-fit flex pl-2 gap-2 items-center text-lg font-thin">
                    <Link to="/"><img src="YTBlack.svg" alt="logo" className="relative w-9 rounded-md" /></Link>
                    {/* <p>YOHANNES TADIWOS</p> */}
                </div>
                <div
                    onClick={() => setShowNavItems(!showNavItems)}
                    className={`bar-icon md:hidden flex flex-col items-end gap-2 py-1 px-3 group hover:cursor-pointer transition-all relative ${showNavItems && "pt-3"
                        }`}
                >
                    <div
                        className={`bg-black w-3 h-[2px] ${!showNavItems && "group-hover:w-8"} transition-all ${showNavItems && "w-8 rotate-45 translate-y-[5px] -translate-x-[5px]"
                            }`}
                    />
                    <div
                        className={`bg-black w-6 h-[3px] group-hover:w-4 transition-all ${showNavItems && "hidden"}`}
                    />
                    <div
                        className={`bg-black w-10 h-[2px] ${!showNavItems && "group-hover:w-3"} transition-all ${showNavItems && "w-8 -rotate-45 -translate-y-[5px] -translate-x-[6px]"
                            }`}
                    />
                </div>

                <ul className="hidden md:flex justify-end gap-7 text-base items-center">
                    <li><Link onClick={onWorksClicked} to="/" className="nav-link">My Work</Link></li>
                    <li><Link to="/lab" className="nav-link">Lab</Link></li>
                    <li><Link className="nav-link">Contact</Link></li>
                </ul>
            </nav>
            {
                showNavItems && (
                    <div className="side-bar z-10 bg-gray-100 fixed right-0 h-full flex flex-col justify-center items-start p-8 min-w-[75%] sm:min-w-[35%] glassmorphism">
                        <ul className="flex flex-col gap-4">
                            <li><Link to="/" onClick={onWorksClicked} className="">My Work</Link></li>
                            <li><Link to="/lab" className="">Lab</Link></li>
                            <li><Link to="/" className="">Contact</Link></li>
                        </ul>
                    </div>
                )
            }
        </>

    )
}

Header.propTypes = {
    onWorksClicked: PropTypes.func.isRequired,
  };

export default Header