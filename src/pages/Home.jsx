import React, { useEffect, useState } from "react";
import { getStories } from "../utils/api";

export default function Home() {
	const [stories, setStories] = useState([]);

	useEffect(() => {
		handleInitialStories();
	}, []);

	return (
		<div>
			Home
			<ul>
				{Array.isArray(stories) &&
					stories.map((story) => <li key={story.id}>{story.title}</li>)}
			</ul>
		</div>
	);

	function handleInitialStories() {
		getStories("top").then((response) => setStories(response));
	}
}
