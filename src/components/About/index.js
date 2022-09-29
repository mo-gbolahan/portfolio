import { useEffect, useState } from "react";
// style
import "./about.styles.scss";
// component
import AnimatedLetters from "../AnimatedLetters";
// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCss3,
	faGithub,
	faHtml5,
	faJsSquare,
	faNode,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	useEffect(() => {
		setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 4000);
	}, []);

	const strArr = ["A", "b", "o", "u", "t", " ", "m", "e"];
	return (
		<>
			<div className="container about-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArr={strArr}
							idx={15}
						/>
					</h1>
					<p>
						I'm very abmitious Front-end developer looking for a
						role in an IT company with the opportunity to work with
						the latest technologies on challenging and diverse
						projects.
					</p>
					<p>
						Also, I'm savvy about the controls system, specifically
						related to the power industry.
					</p>
					<p>
						I'm quite confident, naturally curious, and perpetually
						working on improving my chops one design problem at a
						time.
					</p>
					<p>
						If I'm to define myself in a sentence, I would say I am
						a family person,sport lover, art and anime enthisiast,
						and tech-obsessed.
					</p>
				</div>
				<div className="stage-cube-container">
					<div className="cube-spinner">
						<div className="face1">
							<FontAwesomeIcon icon={faNode} color={"#215732"} />
						</div>
						<div className="face2">
							<FontAwesomeIcon icon={faHtml5} color={"#F06529"} />
						</div>
						<div className="face3">
							<FontAwesomeIcon icon={faCss3} color={"#28A4d9"} />
						</div>
						<div className="face4">
							<FontAwesomeIcon icon={faReact} color={"#5ED4F4"} />
						</div>
						<div className="face5">
							<FontAwesomeIcon
								icon={faJsSquare}
								color={"#EFD81D"}
							/>
						</div>
						<div className="face6">
							<FontAwesomeIcon
								icon={faGithub}
								color={"#EC4D28"}
							/>
						</div>
					</div>
				</div>
			</div>
			<Loader type="pacman" />
			{/* <Loader type="ball-spin-fade-loader" color="yellow" /> */}
		</>
	);
};

export default About;
