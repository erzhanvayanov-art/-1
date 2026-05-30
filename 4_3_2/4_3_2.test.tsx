import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./App";

describe("Form with conditional focus", () => {
  it("should focus first input when shouldFocus is true", () => {
    render(<Form />);

    const showButton = screen.getByText("Show form");
    fireEvent.click(showButton);

    const firstNameInput = screen.getByLabelText(/Enter your first name/) as HTMLInputElement;
    const lastNameInput = screen.getByLabelText(/Enter your last name/) as HTMLInputElement;

    
    expect(document.activeElement).toBe(firstNameInput);
    expect(document.activeElement).not.toBe(lastNameInput);
  });
});
