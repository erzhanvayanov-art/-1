import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./App";

describe("Form with MyInput focus", () => {
  it("should focus input when form is shown", () => {
    render(<Form />);

    const showButton = screen.getByText("Show form");
    fireEvent.click(showButton);

    const input = screen.getByLabelText(/Enter your name/) as HTMLInputElement;
    expect(document.activeElement).toBe(input);
  });

  it("should focus input again when form is hidden and shown", () => {
    render(<Form />);

    const showButton = screen.getByText("Show form");
    fireEvent.click(showButton);

    const hideButton = screen.getByText("Hide form");
    fireEvent.click(hideButton);

    fireEvent.click(showButton);

    const input = screen.getByLabelText(/Enter your name/) as HTMLInputElement;
    expect(document.activeElement).toBe(input);
  });

});
