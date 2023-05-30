import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../../store/store';
import Modal from "./Modal";

describe("Modal component:", () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="overlays" />';
    });

    afterEach(cleanup);

    test("Modal component displayed modal-overlay", () => {
        const { getByTestId } = render(<Provider store={store}><Modal></Modal></Provider>);

        expect(getByTestId('modal-overlay')).toBeInTheDocument();
    });

    test("Modal component displayed backdrop", () => {
        const { getByTestId } = render(<Provider store={store}><Modal></Modal></Provider>);

        expect(getByTestId('backdrop')).toBeInTheDocument();
    });

    test("Modal component displayed with text", () => {
        const { getByText } = render(<Provider store={store}><Modal>Test</Modal></Provider>);

        expect(getByText('Test')).toBeInTheDocument();
    });
});