// hooks
import { useState, useEffect } from "react";
// style
import "./home.styles.scss";
// components
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";

import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import Loader from "react-loaders";

const Home = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	useEffect(() => {
		setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 7000);
	});
	const nameArr = ["b", "o", "l", "a", "h", "a", "n"];
	const jobArr = [
		// "A",
		// " ",
		"w",
		"e",
		"b",
		"  ",
		"d",
		"e",
		"v",
		"e",
		"l",
		"o",
		"p",
		"e",
		"r",
		".",
	];
	return (
		<>
			<div className="container home-page">
				<div className="text-zone">
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i,</span>
						<br />

						<span className={`${letterClass} _13`}>I</span>
						<span className={`${letterClass} _14`}>'m</span>
						<img src={LogoTitle} alt="developer" />
						<AnimatedLetters
							letterClass={letterClass}
							strArr={nameArr}
							idx={15}
						/>
						<br />
						<AnimatedLetters
							letterClass={letterClass}
							strArr={jobArr}
							idx={22}
						/>
					</h1>
					<h2> Frontend Developer / JavaScript Expert</h2>
					<Link to="/contact" className="flat-button">
						{"    "}
						CONTACT ME
					</Link>
				</div>
				<Logo />
			</div>

			<Loader type="pacman" />
		</>
	);
};

export default Home;
