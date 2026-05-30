import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MailClient from "./App";

describe("MailClient with selection", () => {
  it("should select and deselect letters", () => {
    render(<MailClient />);

    const checkboxes = screen.getAllByRole("checkbox");

    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).toBeChecked();

    fireEvent.click(checkboxes[1]);
    expect(checkboxes[1]).toBeChecked();

    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
  });

  it("should display selected count", () => {
    render(<MailClient />);

    const checkboxes = screen.getAllByRole("checkbox");

    expect(screen.getByText(/You selected 0 letters/)).toBeInTheDocument();

    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[1]);

    expect(screen.getByText(/You selected 2 letters/)).toBeInTheDocument();

    fireEvent.click(checkboxes[0]);
    expect(screen.getByText(/You selected 1 letters/)).toBeInTheDocument();
  });
});
