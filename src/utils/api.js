const baseApiEndPoint = "https://hacker-news.firebaseio.com/v0/";
const jsonHeader = ".json?print=pretty";

export async function getStories(storyType) {
	if (checkArgument(storyType)) {
		try {
			const headStoriesIds = await fetchAndParseStories(
				`${baseApiEndPoint}${storyType}stories${jsonHeader}`
			);
			return fetchItems(headStoriesIds);
		} catch {
			throw new Error(
				"There was a problem fetching the stories. Please reload the page and try again."
			);
		}
	} else {
		throw new Error('Wrong argument. You must choose between "new" or "top".');
	}
}

/**************************************************** */

function checkArgument(argument) {
	if ((typeof argument == "string" && argument == "new") || argument == "top") {
		return true;
	} else {
		return false;
	}
}

async function fetchAndParseStories(url) {
	const storiesIdsJson = await fetch(url);
	const convertToObject = storiesIdsJson.json();
	const getHeadStories = convertToObject.then((ids) => ids.slice(0, 50));

	return getHeadStories;
}

async function fetchItems(ids) {
	const allItems = await Promise.all(ids.map(fetchAndParseIndividualItem));
	return allItems;
}

async function fetchAndParseIndividualItem(itemId) {
	const itemJson = await fetch(`${baseApiEndPoint}/item/${itemId}${jsonHeader}`);
	const jsonToObject = itemJson.json();

	return jsonToObject;
}
