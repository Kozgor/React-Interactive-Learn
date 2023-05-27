import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../store/store';
import Message from "./Message";

describe("Message component:", () => {
    let component;
    const initialProps = {
        status: "success",
        message: "Test message",
        removeOnClick: false
    }

    beforeEach(() => {
        component = render(<Provider store={store}><Message {...initialProps}></Message></Provider>);
    });

    afterEach(async () => {
        await component.unmount();
    });

    test("Message component mounts properly", () => {
        expect(component).toBeTruthy();
    });

    test("Message component having correct text content", () => {
        const text = screen.getByText("Test message");

        expect(text).toBeInTheDocument();
    });

    test("Message component could be removed", () => {
        const propsWithRemove = {
            status: "success",
            message: "Test to remove",
            removeOnClick: true
        };

        render(
            <Provider store={store}>
                <Message {...propsWithRemove} />
            </Provider>
        );

        const text = screen.getByText("Test to remove");

        expect(text).toBeInTheDocument();

        fireEvent.click(text);

        expect(screen.queryByText("Test to remove")).not.toBeInTheDocument();
    });
});