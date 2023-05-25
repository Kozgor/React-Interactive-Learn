import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header component:", () => {
    let headerComponent;

    beforeEach(() => {
        headerComponent = render(<Header />);
    });

    afterEach(async () => {
        headerComponent = null;
    });

    test("Header component mounts properly", () => {
        expect(headerComponent).toBeTruthy();
    });

    test("Header component has header tag", () => {
        const appContainer = screen.getByRole("heading");

        expect(appContainer).toBeInTheDocument();
    });

    test("Header component display CartIcon component", () => {
        const banner = screen.getByRole("banner");

        expect(banner).toBeInTheDocument();
    });
});
