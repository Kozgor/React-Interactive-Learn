import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App component:", () => {
    let appComponent;

    beforeEach(() => {
        appComponent = render(<App />);
    });

    afterEach(async () => {
        appComponent = null;
    });

    test("App component mounts properly", () => {
        expect(appComponent).toBeTruthy();
    });

    test("App component has app-container", () => {
        const appContainer = screen.getByTestId("app-container");

        expect(appContainer).toBeInTheDocument();
    });
});
