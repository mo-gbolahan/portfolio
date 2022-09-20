import { useState, useEffect, useRef } from "react";
// style
import "./contact.styles.scss";
// components
import AnimtedLetters from "../AnimatedLetters";
// emailjs
import emailjs from "@emailjs/browser";
// react leaflet
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import MarkerIcon from "../../assets/images/marker-icon.png";

const Contact = () => {
	const strArr = ["C", "o", "n", "t", "a", "c", "t", "", "m", "e"];
	const [letterClass, setLetterClass] = useState("text-animate");

	useEffect(() => {
		return () => {
			setTimeout(() => {
				setLetterClass("text-animate-hover");
			}, 3000);
		};
	});

	const refForm = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"process.env.REACT_APP_SERVICE_ID",
				"process.env.REACT_APP_TEMPLATE_ID",
				refForm.current,
				"process.env.REACT_APP_PUBLIC_KEY"
			)
			.then(
				(res) => {
					alert("Message sent successfully");
					console.log(res.text);
					e.target.reset();
				},
				(err) => {
					console.log(err.text);
					alert("Message was not sent!!! Please try again.");
				}
			);
	};
	const position = [6.569395938105085, 3.5964128208732635];

	const icon = L.icon({ iconUrl: MarkerIcon });
	return (
		<>
			<div className="container contact-page">
				<div className="text-zone">
					<h1>
						<AnimtedLetters
							strArr={strArr}
							idx={15}
							letterClass={letterClass}
						/>
					</h1>
					<p>
						I am interested in Web Development - expecially ambition
						prokect, However, if you have other requests or
						questions, don't hesitate to contact me using the form
						below.
					</p>
					<div className="contact-form">
						<form ref={refForm} onSubmit={sendEmail}>
							<ul>
								<li className="half">
									<input
										type="text"
										name="name"
										placeholder="Name"
										required
									/>
								</li>
								<li className="half">
									<input
										type="email"
										name="email"
										placeholder="Email"
										required
									/>
								</li>
								<li>
									<input
										type="text"
										name="subject"
										placeholder="Subject"
									/>
								</li>
								<li>
									<textarea
										name="message"
										placeholder="Message"
										required
									></textarea>
								</li>
								<li>
									<input
										type="submit"
										value="Send"
										className="flat-btn"
									/>
								</li>
							</ul>
						</form>
					</div>
				</div>
				<div className="info-map">
					Gbolahan Oladeji
					<br /> 223, Jebba Close,
					<br />
					Egbin Estate,
					<br />
					Ikorodu,
					<br />
					Lagos,
					<br />
					Nigeria.
					<br />
					<span>
						+2348167219329
						<br />
						hormorgborlahan@yahoo.com
					</span>
				</div>
				<div className="map-wrap">
					<MapContainer center={position} zoom={15}>
						<TileLayer
							attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
							url="https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=zboI8iCmaPmvVHQh4P1I"
						/>
						{/* <Marker position={position}> */}
						<Marker
							style={{ height: "100px" }}
							position={position}
							icon={icon}
						>
							<Popup>Hi, Wanna come over for a chat?</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
		</>
	);
};
export default Contact;
