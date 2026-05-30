import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./App";

describe("Toggle", () => {
  it("should toggle between Вкл and Выкл", () => {
    render(<Toggle />);

    const button = screen.getByRole("button");

    expect(button.textContent).toBe("Выкл");

    fireEvent.click(button);

    expect(button.textContent).toBe("Вкл");

    fireEvent.click(button);
    expect(button.textContent).toBe("Выкл");
  });
});
