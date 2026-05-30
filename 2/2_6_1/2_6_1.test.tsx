import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Scoreboard from "./App";

describe("Scoreboard", () => {
  it("should update score when plus button is clicked", () => {
    render(<Scoreboard />);

    const scoreElement = screen.getByText(/Score:/);
    const plusButton = screen.getByText("+1");

    expect(scoreElement.textContent).toContain("10");

    fireEvent.click(plusButton);

    expect(scoreElement.textContent).toContain("11");
  });

  it("should update first name and last name independently", () => {
    render(<Scoreboard />);

    const firstNameInput = screen.getByLabelText(/First name:/) as HTMLInputElement;
    const lastNameInput = screen.getByLabelText(/Last name:/) as HTMLInputElement;
    const scoreElement = screen.getByText(/Score:/);

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(firstNameInput.value).toBe("John");
    expect(scoreElement.textContent).toContain("10");

    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    expect(lastNameInput.value).toBe("Doe");

    expect(scoreElement.textContent).toContain("10");
  });

  it("should update all fields independently", () => {
    render(<Scoreboard />);

    const firstNameInput = screen.getByLabelText(/First name:/) as HTMLInputElement;
    const lastNameInput = screen.getByLabelText(/Last name:/) as HTMLInputElement;
    const plusButton = screen.getByText("+1");

    fireEvent.change(firstNameInput, { target: { value: "Jane" } });

    fireEvent.click(plusButton);

    fireEvent.change(lastNameInput, { target: { value: "Smith" } });

    expect(firstNameInput.value).toBe("Jane");
    expect(lastNameInput.value).toBe("Smith");
    expect(screen.getByText(/Score:/).textContent).toContain("11");
  });
});
