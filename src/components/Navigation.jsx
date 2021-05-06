import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
	return (
		<React.Fragment>
			<nav className="nav">
				<NavLink exact to="/" activeClassName="active" className="nav__link">
					Top
				</NavLink>
				<NavLink to="/new" activeClassName="active" className="nav__link">
					New
				</NavLink>
			</nav>
		</React.Fragment>
	);
}
