import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import FilterableList from "./App";
import { foods } from "./data";

describe("FilterableList", () => {
  it("should filter items based on query", () => {
    render(<FilterableList />);

    const searchInput = screen.getByLabelText(/Search/i) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "su" } });

    const rows = screen.getAllByRole("row").slice(1);
    rows.forEach((row) => {
      within(row);
      const nameCell = row.querySelector("td")!;
      expect(nameCell.textContent!.toLowerCase()).toContain("su");
    });

    expect(screen.queryByText("Dal")).not.toBeInTheDocument();

  });

  it("should show all items when query is empty", () => {
    render(<FilterableList />);

    const searchInput = screen.getByLabelText(/Search/i) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: "sushi" } });
    expect(screen.queryByText("Dal")).not.toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "" } });

    foods.forEach((food) => {
      expect(screen.getByText(food.name)).toBeInTheDocument();
    });
  });

  it("should filter case-insensitively", () => {
  render(<FilterableList />);

  const searchInput = screen.getByLabelText(/Search/i) as HTMLInputElement;

  fireEvent.change(searchInput, { target: { value: "SUSHI" } });

  const rows = screen.getAllByRole("row").slice(1); 
  expect(rows).toHaveLength(1);

  expect(rows[0].textContent).toContain("Sushi");

  
  expect(screen.queryByText("Dal")).not.toBeInTheDocument();
});

});
