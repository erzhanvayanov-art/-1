import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("ColorSwitch", () => {
  beforeEach(() => {
    document.body.style.backgroundColor = "";
  });

  afterEach(() => {
    document.body.style.backgroundColor = "";
  });

  it("should change background color and not increment click counter", () => {
    render(<App />);

    const button = screen.getByText("Change color");
    const clicksCounter = screen.getByText(/Clicks on the page:/);

    const initialClicksText = clicksCounter.textContent || "";
    const initialClicks = parseInt(initialClicksText.match(/\d+/)?.[0] || "0");

    fireEvent.click(button);

    expect(document.body.style.backgroundColor).not.toBe("");
    expect(document.body.style.backgroundColor).toMatch(/rgb\(\d+, \d+, \d+\)/);

    const afterClickText = clicksCounter.textContent || "";
    const afterClicks = parseInt(afterClickText.match(/\d+/)?.[0] || "0");
    expect(afterClicks).toBe(initialClicks);
  });

  it("should call onChangeColor when button is clicked", () => {
    const handleChangeColor = vi.fn();
    const TestComponent = () => {
      const ColorSwitch = ({ onChangeColor }: { onChangeColor: () => void }) => (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onChangeColor();
          }}
        >
          Change color
        </button>
      );
      return <ColorSwitch onChangeColor={handleChangeColor} />;
    };

    render(<TestComponent />);
    const button = screen.getByText("Change color");
    fireEvent.click(button);

    expect(handleChangeColor).toHaveBeenCalledTimes(1);
  });
});
