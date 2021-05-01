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
		const fetchedStories = await api.getStories("top").then((response) => response.length);

		expect(fetchedStories).toBe(50);
	});
});
