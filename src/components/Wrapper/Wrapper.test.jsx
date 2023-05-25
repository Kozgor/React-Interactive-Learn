import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

import Wrapper from "./Wrapper";

describe("Wrapper component:", () => {
    let component;

    beforeEach(() => {
        component = render(<Wrapper></Wrapper>);
    });

    afterEach(async () => {
        component = null;
    });

    test("Wrapper component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("Wrapper component has app-container", () => {
        const appContainer = screen.getByTestId("app-container");

        expect(appContainer).toBeInTheDocument();
    });
});
