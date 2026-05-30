import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FeedbackForm from "./App";

describe("FeedbackForm", () => {
  it("should show form initially and thank you message after submit", () => {
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<FeedbackForm />);

    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    expect(screen.getByText("Send")).toBeInTheDocument();

    const textarea = screen.getByPlaceholderText("Message") as HTMLTextAreaElement;
    const sendButton = screen.getByText("Send");

    fireEvent.change(textarea, { target: { value: "Great job!" } });
    expect(textarea.value).toBe("Great job!");
    fireEvent.click(sendButton);

    expect(screen.getByText("Thank you!")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("Message")).not.toBeInTheDocument();

    alertSpy.mockRestore();
  });

  it("should call alert with message content on submit", () => {
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(<FeedbackForm />);

    const textarea = screen.getByPlaceholderText("Message") as HTMLTextAreaElement;
    const sendButton = screen.getByText("Send");

    fireEvent.change(textarea, { target: { value: "Test message" } });
    fireEvent.click(sendButton);

    expect(alertSpy).toHaveBeenCalledWith('Sending: "Test message"');

    alertSpy.mockRestore();
  });
});
