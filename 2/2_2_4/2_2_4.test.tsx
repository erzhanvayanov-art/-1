import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FeedbackForm from "./App";

describe("FeedbackForm", () => {
  let promptSpy: any;
  let alertSpy: any;

  beforeEach(() => {
    promptSpy = vi.spyOn(window, "prompt").mockImplementation(() => "John");
    alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    promptSpy.mockRestore();
    alertSpy.mockRestore();
  });

  it("should show greeting with name from prompt", () => {
    render(<FeedbackForm />);

    const button = screen.getByText("Greet");
    fireEvent.click(button);

    expect(promptSpy).toHaveBeenCalledWith("What is your name?");
    expect(alertSpy).toHaveBeenCalledWith("Hello, John!");
  });

  it("should not use state for name", () => {
    render(<FeedbackForm />);

    const button = screen.getByText("Greet");
    
    promptSpy.mockReturnValueOnce("Alice");
    fireEvent.click(button);
    expect(alertSpy).toHaveBeenLastCalledWith("Hello, Alice!");

    promptSpy.mockReturnValueOnce("Bob");
    fireEvent.click(button);
    expect(alertSpy).toHaveBeenLastCalledWith("Hello, Bob!");
  });
});
