import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getStories } from "../utils/api";
import { formatDate } from "../utils/helpers";

export default function Home({ storyType, location }) {
	const [stories, setStories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		handleInitialStories(storyType);
	}, [location.pathname]);

	return (
		<div className="home__container">
			{loading && <Loading />}
			<ul className="stories__list">
				{Array.isArray(stories) &&
					!loading &&
					stories.map(
						(story) =>
							console.log(stories) || (
								<li key={story.id} className="stories__item">
									<a href={story.url} className="stories__link">
										{story.title}
									</a>
									<p className="stories__info">
										by {story.by} on {formatDate(story.time)} with{" "}
										{story.descendants}{" "}
										{story.descendants == 1 ? "comment" : "comments"}
									</p>
								</li>
							)
					)}
			</ul>
		</div>
	);

	function handleInitialStories(type) {
		getStories(type).then((fetchedStories) => {
			setStories(fetchedStories);
			setLoading(false);
		});
	}
}
