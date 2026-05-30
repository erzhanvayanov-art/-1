import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useCounter } from "./useCounter";

function TestComponent({ delay }: { delay: number }) {
  const count = useCounter(delay);
  return <div>Count: {count}</div>;
}

describe("useCounter with useInterval", () => {
  it("увеличивает count с учетом delay и очищает интервал при размонтировании", () => {
    vi.useFakeTimers();

    const { unmount, rerender } = render(<TestComponent delay={1000} />);

    expect(screen.getByText(/Count: 0/)).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Count: 1/)).toBeTruthy();

    rerender(<TestComponent delay={500} />);
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(screen.getByText(/Count: 2/)).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Count: 4/)).toBeTruthy();

    unmount();

    vi.useRealTimers();
  });
});
