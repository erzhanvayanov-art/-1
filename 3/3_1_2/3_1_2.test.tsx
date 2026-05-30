import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import EditProfile from "./App";

describe("EditProfile", () => {
  it("should toggle between edit and view modes", () => {
    render(<EditProfile />);

    const button = screen.getByText(/Edit Profile|Save Profile/);
    
    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("Jacobs")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("Jane")).not.toBeInTheDocument();

    fireEvent.click(button);

    const firstNameInput = screen.getByDisplayValue("Jane") as HTMLInputElement;
    const lastNameInput = screen.getByDisplayValue("Jacobs") as HTMLInputElement;
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();

    expect(screen.getByText(/Save Profile/)).toBeInTheDocument();
  });

  it("should update greeting message when editing", () => {
    render(<EditProfile />);

    const button = screen.getByText(/Edit Profile/);
    fireEvent.click(button);

    const firstNameInput = screen.getByDisplayValue("Jane") as HTMLInputElement;
    const lastNameInput = screen.getByDisplayValue("Jacobs") as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(screen.getByText(/Hello, John Jacobs!/)).toBeInTheDocument();

    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    expect(screen.getByText(/Hello, John Doe!/)).toBeInTheDocument();
  });

  it("should save changes when submitting form", () => {
    render(<EditProfile />);

    const button = screen.getByText(/Edit Profile/);
    fireEvent.click(button);

    const firstNameInput = screen.getByDisplayValue("Jane") as HTMLInputElement;
    fireEvent.change(firstNameInput, { target: { value: "John" } });

    const saveButton = screen.getByText(/Save Profile/);
    fireEvent.click(saveButton);

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.queryByDisplayValue("John")).not.toBeInTheDocument();
  });
});
