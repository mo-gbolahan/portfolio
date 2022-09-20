import { useRef, useEffect } from "react";
// import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
// import gsap from "gsap-trial";
// style
import "./logo.styles.scss";
// img
import LogoS from "../../../assets/images/logo-s.png";

const Logo = () => {
	const bgRef = useRef();
	const outlineLogoRef = useRef();
	const solidLogoRef = useRef();

	// useEffect(() => {
	// 	gsap.registerPlugin(DrawSVGPlugin);

	// 	gsap.timeline()
	// 		.to(bgRef.current, {
	// 			duration: 1,
	// 			opacity: 1,
	// 		})
	// 		.from(outlineLogoRef.current, {
	// 			drawSVG: 0,
	// 			duration: 10,
	// 		});
	// 	gsap.fromTo(
	// 		solidLogoRef.current,
	// 		{ opacity: 0 },
	// 		{
	// 			opacity: 1,
	// 			delay: 4,
	// 			durtion: 4,
	// 		}
	// 	);
	// }, []);
	return (
		<div className="logo-container" ref={bgRef}>
			<img
				ref={solidLogoRef}
				className="solid-logo"
				src={LogoS}
				alt="G"
			/>

			<svg
				width="787"
				height="889"
				viewBox="0 0 787 889"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="G-outline"
			>
				<g className="svg-container" fill="none">
					<path
						ref={outlineLogoRef}
						d="M672.09 250.118L680.214 268.34L578.156 310.857C515.195 158.505 353.221 114.975 230.345 191.405M380.132 443.469H344.5V499V548.243H577.648V711.224M157.5 100C-33.4146 213.885 -134.221 855.622 371.5 887.509C599.48 876.88 629.438 830.677 699.001 776.012 M728.5 227.5L627.843 268.317C608.258 203.659 529.917 104.417 386.637 114.441C308.124 127.139 167.592 167.571 160.892 399.638C157.16 528.903 158.099 712.427 386.637 735.458C486.108 745.482 593.311 711.399 631.966 680.824V503.892H393V399.638H767V711.399C760.816 726.436 641.759 859.26 413.437 847.231C253.664 855.25 -12.2813 739.969 26.8884 369.063C26.8884 302.012 59.5368 188.188 152.5 103.5C204.776 55.8786 273.29 14.327 372.721 3.16974C533.525 -14.8743 680.568 81.6439 728.5 227.5Z"
					/>
				</g>
			</svg>
		</div>
	);
};

export default Logo;
