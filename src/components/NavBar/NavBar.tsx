import React from "react"
import { Link } from "react-router-dom";
import "./NavBar.css"

interface NavBarProps
{
    title: string;
}

const navLinks = 
[
    { label: "Home", route: "/" },
    { label: "About Me", route: "/aboutme" },
    { label: "Resume", route: "/aidankelly.pdf" },
    { label: "Projects", route: "/projects" },
    { label: "Blog", route: "/blog" },
];

export default function NavBar( {title}: NavBarProps )
{   
    return (
        <nav className="bg-zinc-700">
            <ul className="nav-links flex">
            {navLinks.map((link) => {
                const isActive = title === link.label;
                const isResume = link.label == "Resume"
                if(isResume)
                {
                    return (
                        <React.Fragment key={link.label}>
                            <li className="nav-items flex-initial p-3">
                                <a href={link.route} className=" text-emerald-400">{link.label}</a>
                            </li>
                            <li className="seperator flex-initial p-3 text-gray-800">|</li>
                        </React.Fragment>
                    );
                }
                else
                {
                    return (
                        <React.Fragment key={link.label}>
                            <li className="nav-items flex-initial p-3">
                            {isActive ? (
                                link.label
                            ) : (
                                <Link to={link.route} className=" text-emerald-400">{link.label}</Link>
                            )}
                            </li>
                            <li className="seperator flex-initial p-3 text-gray-800">|</li>
                        </React.Fragment>
                        );
                }
            })}
            </ul>
        </nav>
    );
}