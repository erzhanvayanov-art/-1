import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";

const consoleLogSpy = vi.spyOn(console, "log");

describe("Form Component", () => {
  beforeEach(() => {
    consoleLogSpy.mockClear();
    vi.clearAllMocks();
    vi.doUnmock("react");
    vi.resetModules();
  });

  afterEach(() => {
    vi.doUnmock("react");
    vi.resetModules();
  });

  it("should NOT use useEffect hook in the component", async () => {
    const useEffectSpy = vi.fn();
    vi.doMock("react", async () => {
      const actual = await vi.importActual<typeof import("react")>("react");
      return {
        ...actual,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        useEffect: useEffectSpy.mockImplementation(actual.useEffect as any),
      };
    });
    const { default: Form } = await import("./App");
    render(<Form />);
    expect(useEffectSpy).not.toHaveBeenCalled();
  });

  it("should NOT call sendMessage when state changes without form submission", async () => {
    vi.doMock("react", async () => {
      const actual = await vi.importActual<typeof import("react")>("react");
      let useStateCallCount = 0;
      const mockUseState = vi.fn((initialState) => {
        useStateCallCount++;
        if (useStateCallCount === 1) {
          return [false, vi.fn()];
        }
        if (useStateCallCount === 2) {
          return ["", vi.fn()];
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (actual.useState as any)(initialState);
      });
      return {
        ...actual,
        useState: mockUseState,
      };
    });
    const { default: Form } = await import("./App");
    render(<Form />);
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  it("should have only state hooks, no effect hooks", async () => {
    const useEffectSpy = vi.fn();
    vi.doMock("react", async () => {
      const actual = await vi.importActual<typeof import("react")>("react");
      return {
        ...actual,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        useEffect: useEffectSpy.mockImplementation(actual.useEffect as any),
      };
    });
    const { default: Form } = await import("./App");
    render(<Form />);
    expect(useEffectSpy).not.toHaveBeenCalled();
  });
});