import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../store/store';
import Header from "./Header";

describe("Header component:", () => {
    let component;

    beforeEach(() => {
        component = render(<Provider store={store}><Header/></Provider>);
    });

    afterEach(async () => {
        await component.unmount();
    });

    test("Header component mounts properly", () => {
        expect(component).toBeTruthy();
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
