import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Page from "./App";
import { fetchData } from "./api";

vi.mock("./api", () => ({
  fetchData: vi.fn(),
}));

describe("Page with planet and place selection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch places when planet is selected", async () => {
    (fetchData as any)
      .mockResolvedValueOnce([{ id: "earth", name: "Earth" }, { id: "mars", name: "Mars" }])
      .mockResolvedValueOnce([{ id: "paris", name: "Paris" }, { id: "london", name: "London" }]);

    render(<Page />);

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledWith("/planets");
    });

    const planetSelect = screen.getAllByRole("combobox")[0] as HTMLSelectElement;
    fireEvent.change(planetSelect, { target: { value: "earth" } });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledWith("/planets/earth/places");
    });
  });
});
