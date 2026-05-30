import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./App";

describe("Form", () => {
  it("should update first name and last name on input", () => {
    render(<Form />);

    const firstNameInput = screen.getByPlaceholderText("First name") as HTMLInputElement;
    const lastNameInput = screen.getByPlaceholderText("Last name") as HTMLInputElement;
    const heading = screen.getByRole("heading", { level: 1 });

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(firstNameInput.value).toBe("John");
    expect(heading.textContent).toContain("John");

    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    expect(lastNameInput.value).toBe("Doe");
    expect(heading.textContent).toContain("Doe");
    expect(heading.textContent).toContain("John");
  });
});
