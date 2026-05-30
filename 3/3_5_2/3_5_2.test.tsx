import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Messenger from "./App";

describe("Messenger with send message", () => {
  let alertSpy: any;

  beforeEach(() => {
    alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  it("should show alert and clear message when sending", () => {
    render(<Messenger />);

    const textarea = screen.getByPlaceholderText(/Chat to/) as HTMLTextAreaElement;
    const sendButton = screen.getByText(/Send to/);

    fireEvent.change(textarea, { target: { value: "Test message" } });

   
    fireEvent.click(sendButton);

    expect(alertSpy).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining("Test message"));

    expect(textarea.value).toBe("");
  });
});
