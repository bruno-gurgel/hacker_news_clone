import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	const [active, setActive] = useState("top");
	return (
		<React.Fragment>
			<nav className="nav">
				<NavLink
					exact
					to="/"
					activeClassName="active"
					className="nav__link"
					onClick={() => setActive("top")}
				>
					Top
				</NavLink>
				<NavLink
					to="/new"
					activeClassName="active"
					className="nav__link"
					onClick={() => setActive("new")}
				>
					New
				</NavLink>
			</nav>
		</React.Fragment>
	);
}
