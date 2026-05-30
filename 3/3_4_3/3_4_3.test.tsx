import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactManager from "./App";

describe("ContactManager", () => {
  it("should fully manage contacts correctly", async () => {
    render(<ContactManager />);

    const nameInput = screen.getByDisplayValue("Taylor") as HTMLInputElement;
    const emailInput = screen.getByDisplayValue("taylor@mail.com") as HTMLInputElement;

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();


    fireEvent.change(nameInput, { target: { value: "Taylor Modified" } });
    fireEvent.change(emailInput, { target: { value: "taylor.modified@mail.com" } });

    expect(nameInput.value).toBe("Taylor Modified");
    expect(emailInput.value).toBe("taylor.modified@mail.com");

    const aliceButton = screen.getByText("Alice");
    fireEvent.click(aliceButton);

    const aliceNameInput = await screen.findByDisplayValue("Alice") as HTMLInputElement;
    const aliceEmailInput = await screen.findByDisplayValue("alice@mail.com") as HTMLInputElement;

    expect(aliceNameInput.value).toBe("Alice");
    expect(aliceEmailInput.value).toBe("alice@mail.com");

    expect(screen.queryByDisplayValue("Taylor Modified")).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue("taylor.modified@mail.com")).not.toBeInTheDocument();

    fireEvent.change(aliceNameInput, { target: { value: "Alice Updated" } });
    fireEvent.change(aliceEmailInput, { target: { value: "alice.updated@mail.com" } });
    fireEvent.click(screen.getByText("Save"));

    expect(screen.getByText("Alice Updated")).toBeInTheDocument();

    fireEvent.change(aliceNameInput, { target: { value: "Temporary Change" } });
    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByDisplayValue("Alice Updated")).toBeInTheDocument();
    expect(screen.getByDisplayValue("alice.updated@mail.com")).toBeInTheDocument();
  });
});
