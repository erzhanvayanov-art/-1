import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "./App";

describe("Page with search focus", () => {
  it("should focus input when search button is clicked", () => {
    render(<Page />);

    const input = screen.getByPlaceholderText("Looking for something?") as HTMLInputElement;
    const button = screen.getByText("Search");

    expect(document.activeElement).not.toBe(input);

    fireEvent.click(button);

    expect(document.activeElement).toBe(input);
  });
});
