import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button component:", () => {
    let component;

    beforeEach(() => {
        component = render(<Button>Click</Button>);
    });

    afterEach(async () => {
        component = null;
    });

    test("Button component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("Button component has button element", () => {
        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });

    test("Button component has text for button", () => {
        const text = screen.getByText("Click");

        expect(text).toBeInTheDocument();
    });
});
