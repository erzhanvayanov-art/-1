import { describe, it, expect } from "vitest";
import { getFinalState } from "./processQueue";

describe("getFinalState", () => {
  it("should handle queue with number, updater, and number", () => {
    const result = getFinalState(0, [1, 1, 1]);
    expect(result).toBe(1);
  });

  it("should handle queue of updater functions", () => {
    const increment = (n: number) => n + 1;
    const result = getFinalState(0, [increment, increment, increment]);
    expect(result).toBe(3);
  });

  it("should handle queue with number then updater", () => {
    const increment = (n: number) => n + 1;
    const result = getFinalState(0, [5, increment]);
    expect(result).toBe(6);
  });

  it("should handle queue with number, updater, and number", () => {
    const increment = (n: number) => n + 1;
    const result = getFinalState(0, [5, increment, 42]);
    expect(result).toBe(42);
  });
});
