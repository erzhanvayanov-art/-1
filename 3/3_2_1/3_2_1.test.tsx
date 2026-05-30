import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Clock", () => {
  it("updates color when select value changes", () => {
    render(<App />);

    const select = screen.getByRole("combobox");
    const clock = screen.getByRole("heading", { level: 1 });

    expect(getComputedStyle(clock).color).toBe("rgb(240, 128, 128)");

    fireEvent.change(select, { target: { value: "midnightblue" } });
    expect(getComputedStyle(clock).color).toBe("rgb(25, 25, 112)");

    fireEvent.change(select, { target: { value: "rebeccapurple" } });
    expect(getComputedStyle(clock).color).toBe("rgb(102, 51, 153)");
  });

});
