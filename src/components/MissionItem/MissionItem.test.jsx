import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";

import MissionItem from "./MissionItem";

describe("MissionItem component:", () => {
    let component;

    beforeEach(() => {
        component = render(<MissionItem />);
    });

    afterEach(async () => {
        component = null;
    });

    test("MissionItem component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("MissionItem component has mission-item", () => {
        const item = screen.getByTestId("mission-item");

        expect(item).toBeInTheDocument();
    });

    test("MissionItem component has button", () => {
        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });
});
