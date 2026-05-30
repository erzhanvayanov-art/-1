import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Gallery from "./App";
import { sculptureList } from "./data";

describe("Gallery", () => {
  it("should navigate through sculptures with Previous and Next buttons", () => {
    render(<Gallery />);
    expect(screen.getByText(sculptureList[0].name, { exact: false })).toBeInTheDocument();

    const nextButton = screen.getByText("Next");
    const prevButton = screen.getByText("Previous");

    expect(prevButton).toBeDisabled();

    fireEvent.click(nextButton);

    expect(screen.getByText(sculptureList[1].name, { exact: false })).toBeInTheDocument();

    expect(prevButton).not.toBeDisabled();

    for (let i = 1; i < sculptureList.length - 1; i++) {
      fireEvent.click(nextButton);
    }

    expect(nextButton).toBeDisabled();
    expect(prevButton).not.toBeDisabled();

    expect(
      screen.getByText(sculptureList[sculptureList.length - 1].name, { exact: false })
    ).toBeInTheDocument();
  });

});
