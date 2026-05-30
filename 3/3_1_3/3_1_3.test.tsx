import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import EditProfile from "./App";

describe("EditProfile refactored", () => {
  it("should toggle between edit and view modes", () => {
    render(<EditProfile />);

    const button = screen.getByText(/Редактировать|Сохранить/);

    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("Jacobs")).toBeInTheDocument();

    fireEvent.click(button);

    const firstNameInput = screen.getByDisplayValue("Jane") as HTMLInputElement;
    const lastNameInput = screen.getByDisplayValue("Jacobs") as HTMLInputElement;
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();

    expect(screen.getByText(/Сохранить/)).toBeInTheDocument();

    
  });

  it("should update greeting message when editing", () => {
    render(<EditProfile />);

    const button = screen.getByText(/Редактировать/);
    fireEvent.click(button);

    const firstNameInput = screen.getByDisplayValue("Jane") as HTMLInputElement;
    const lastNameInput = screen.getByDisplayValue("Jacobs") as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "Иван" } });
    expect(screen.getByText(/Привет, Иван Jacobs!/)).toBeInTheDocument();

    fireEvent.change(lastNameInput, { target: { value: "Иванов" } });
    expect(screen.getByText(/Привет, Иван Иванов!/)).toBeInTheDocument();
  });
});
