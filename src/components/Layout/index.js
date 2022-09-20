import { Outlet } from "react-router-dom";

// style
import "./layout.styles.scss";
// components
import Sidebar from "../Sidebar";

const Layout = () => (
	<div className="app">
		<Sidebar />
		<div className="page">
			<span className="tags top-tags">
				<span className="top-tag-html">&lt;html&gt;</span>
				<br />
				&lt;body&gt;
			</span>
			<Outlet />
			<span className="tags bottom-tags">
				&lt;/body&gt;
				<br />
				<span className="bottom-tag-html">&lt;/html&gt;</span>
			</span>
		</div>
	</div>
);

export default Layout;
