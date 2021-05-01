import { render, screen } from "@testing-library/react";
import App from "./App";
import * as api from "./utils/api";

jest.mock("");

describe("fetches and display the stories", () => {
	test("checks argument", () => {
		expect(api.checkArgument("new")).toBe(true);
		expect(api.checkArgument("top")).toBe(true);
		expect(api.checkArgument("test")).toBe(false);
		expect(api.checkArgument(6)).toBe(false);
	});
	test("fetches and parse the stories", async () => {
		const fetchDataLength = await api
			.fetchAndParseStories(
				"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
			)
			.then((response) => response.length);

		expect(fetchDataLength).toBe(50);
	});
});
