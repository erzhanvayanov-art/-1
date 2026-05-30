import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Wrapper from "./App";

describe("Wrapper", () => {
  it('"Create Story" does not duplicate after rerender', () => {
    const { rerender } = render(<Wrapper />);

    rerender(<Wrapper />);
    rerender(<Wrapper />);

    const createStoryItems = screen.getAllByText("Create Story");
    expect(createStoryItems).toHaveLength(1);
  });
});
