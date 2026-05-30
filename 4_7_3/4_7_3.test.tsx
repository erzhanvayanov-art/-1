import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { createConnection } from "./chat";

vi.mock("./chat", () => ({
  createConnection: vi.fn(),
}));

describe("ChatRoom with cleanup", () => {
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

  it("should not reconnect when theme toggles", () => {
    render(<App />);

    const toggleButton = screen.getByText("Toggle theme");
    const initialCallCount = (createConnection as any).mock.calls.length;

    fireEvent.click(toggleButton);

    
    expect((createConnection as any).mock.calls.length).toBe(initialCallCount);
  });

});
