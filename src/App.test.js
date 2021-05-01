import { render, screen } from "@testing-library/react";
import App from "./App";
import { checkArgument } from "./utils/api";

describe("fetches the stories", () => {
	test("checks argument", () => {
		expect(checkArgument("new")).toBe(true);
		expect(checkArgument("top")).toBe(true);
		expect(checkArgument("test")).toBe(false);
		expect(checkArgument(6)).toBe(false);
	});
});
