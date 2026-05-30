import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TravelPlan from "./App";

describe("TravelPlan", () => {
  it("updates packed count when a packed item is deleted", () => {
  render(<TravelPlan />);

  
  expect(screen.getByText("1 out of 3 packed!")).toBeInTheDocument();

  
  fireEvent.click(
    screen.getByText("Warm socks").closest("li")!.querySelector("button")!
  );

  
  expect(screen.getByText("0 out of 2 packed!")).toBeInTheDocument();
});

});
