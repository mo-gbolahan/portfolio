import { Link, NavLink } from "react-router-dom";
// style
import "./sidebar.styles.scss";
// img
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
// fontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faEnvelope,
	faHome,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useRef } from "react";
const Sidebar = () => {
	const navBarRef = useRef();
	const [showNavBar, setShowNavBar] = useState(true);

	return (
		<>
			<div className="toggle-btn btn ">
				<div
					onClick={(e) => {
						e.target.classList.add("fa-beat");
						setShowNavBar((prev) => !prev);
					}}
					onAnimationEnd={(e) => e.target.classList.remove("fa-beat")}
				>
					<FontAwesomeIcon icon={faBars} color="#4d4d4e" beat />
				</div>
				<Link className="logo" to="/">
					<img src={LogoS} alt="logoG" />

					<img
						className="sub-logo"
						src={LogoSubtitle}
						alt="Gbolahan"
					/>
				</Link>
			</div>
			{
				<div
					ref={navBarRef}
					className={`nav-bar ${showNavBar ? "roll-out" : "roll-in"}`}
				>
					<nav>
						<NavLink exact="true" activeclassname="active" to="/">
							<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
						</NavLink>
						<NavLink
							exact="true"
							activeclassname="active"
							className="about-link"
							to="/about"
						>
							<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
						</NavLink>
						<NavLink
							exact="true"
							activeclassname="active"
							className="contact-link"
							to="/contact"
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								color="#4d4d4e"
							/>
						</NavLink>
					</nav>
					<ul>
						<li>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/feed/"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									color="#4d4d4e"
								/>
							</a>
						</li>
						<li>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://github.com/mo-gbolahan"
							>
								<FontAwesomeIcon
									icon={faGithub}
									color="#4d4d4e"
								/>
							</a>
						</li>
					</ul>
				</div>
			}
		</>
	);
};

export default Sidebar;
