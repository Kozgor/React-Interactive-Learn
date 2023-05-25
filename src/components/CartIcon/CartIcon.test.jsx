import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

import CartIcon from "./CartIcon";

describe("CartIcon component:", () => {
    let component;

    beforeEach(() => {
        component = render(<CartIcon amount={0} />);
    });

    afterEach(async () => {
        component = null;
    });

    test("CartIcon component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("CartIcon component has banner role", () => {
        const banner = screen.getByRole("banner");

        expect(banner).toBeInTheDocument();
    });

    test("CartIcon component has value", () => {
        const value = screen.getByText("0");

        expect(value).toBeInTheDocument();
    });
});
