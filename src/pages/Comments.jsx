import React from "react";
import { Link } from "react-router-dom";

export default function Comments({ location }) {
	return (
		<div>
			<h1 className="comment__header">
				<Link
					to={{ pathname: location.state.postLink }}
					target="_blank"
					className="comment__header--link"
				>
					{location.state.postName}
				</Link>
			</h1>
		</div>
	);
}
