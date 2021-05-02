import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getStories } from "../utils/api";

export default function Home() {
	const [stories, setStories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		handleInitialStories();
	}, []);

	return (
		<div className="home__container">
			{loading && <Loading />}
			<ul className="stories__list">
				{Array.isArray(stories) &&
					!loading &&
					stories.map((story) => (
						<li key={story.id} className="stories__item">
							<a href={story.url} className="stories__link">
								{story.title}
							</a>
						</li>
					))}
			</ul>
		</div>
	);

	function handleInitialStories() {
		getStories("top").then((response) => {
			setStories(response);
			setLoading(false);
		});
	}
}
