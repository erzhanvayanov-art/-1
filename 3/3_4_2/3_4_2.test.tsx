import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Form fields with reverse order", () => {
  it("should reverse field order when checkbox is checked and preserve values", () => {
    render(<App />);

    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    const firstInput = inputs[0];
    const lastInput = inputs[1];

    expect(firstInput.placeholder).toBe("First name");
    expect(lastInput.placeholder).toBe("Last name");

    fireEvent.change(firstInput, { target: { value: "John" } });
    fireEvent.change(lastInput, { target: { value: "Doe" } });

    const checkbox = screen.getByLabelText(/Reverse order/) as HTMLInputElement;
    fireEvent.click(checkbox);

    const inputsAfter = screen.getAllByRole("textbox") as HTMLInputElement[];
    expect(inputsAfter[0].placeholder).toBe("Last name");
    expect(inputsAfter[1].placeholder).toBe("First name");

    expect(inputsAfter[0].value).toBe("Doe");
    expect(inputsAfter[1].value).toBe("John");
  });
});
