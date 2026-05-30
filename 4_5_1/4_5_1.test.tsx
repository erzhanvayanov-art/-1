import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { createConnection } from "./chat";

vi.mock("./chat", () => ({
  createConnection: vi.fn(),
}));

describe("ChatRoom connection", () => {
  let mockConnect: any;
  let mockDisconnect: any;

  beforeEach(() => {
    mockConnect = vi.fn();
    mockDisconnect = vi.fn();
    (createConnection as any).mockReturnValue({
      connect: mockConnect,
      disconnect: mockDisconnect,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should not reconnect when typing in input", () => {
    render(<App />);

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const initialCallCount = (createConnection as any).mock.calls.length;

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.change(input, { target: { value: "test message" } });

    expect((createConnection as any).mock.calls.length).toBe(initialCallCount);
  });
});
