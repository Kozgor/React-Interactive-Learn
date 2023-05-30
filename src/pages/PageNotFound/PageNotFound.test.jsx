import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../store/store';
import PageNotFound from "./PageNotFound";

describe("Header component:", () => {
    let component;

    beforeEach(() => {
        component = render(<Provider store={store}><PageNotFound/></Provider>);
    });

    afterEach(async () => {
        await component.unmount();
    });

    test("PageNotFound component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("PageNotFound component has header tag", () => {
        const message404 = screen.getByTestId("404-message");

        expect(message404).toBeInTheDocument();
    });
});
