import "@testing-library/jest-dom/extend-expect";

import React from "react";

import { render } from "@testing-library/react";

import Index from "../src/pages";

describe("test", () => {
    test("should work", () => {
        expect(() => {
            const { getByText } = render(<Index />);
        }).not.toThrow();
    });
})

export {};