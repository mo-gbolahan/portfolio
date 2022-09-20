import "./App.scss";
import { Route, Routes } from "react-router-dom";
// components
import Home from "./components/Home";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Test from "./components/Test";

function App() {
	return (
		<div className="">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="test" element={<Test />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
