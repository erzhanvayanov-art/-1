import { render, screen, fireEvent } from "@testing-library/react";
import Gallery from "./App";
import { describe, it, expect } from "vitest";

describe("Gallery", () => {
  it("should create a new <img> element when clicking Next", () => {
    render(<Gallery />);

    const imgBefore = screen.getByRole("img");
    const nextButton = screen.getByText("Next");

    fireEvent.click(nextButton);

    const imgAfter = screen.getByRole("img");

    expect(imgAfter).not.toBe(imgBefore);
  });
});
