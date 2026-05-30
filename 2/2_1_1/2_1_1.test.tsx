import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LightSwitch from "./App";

describe("LightSwitch", () => {
  beforeEach(() => {
    document.body.style.backgroundColor = ''
  })
  it("should toggle background color on button click", () => {
    render(<LightSwitch />)

    const button = screen.getByRole('button', { name: /toggle the lights/i })

    expect(document.body.style.backgroundColor).toBe('')

    fireEvent.click(button)
    expect(document.body.style.backgroundColor).toBe('black')

    fireEvent.click(button)
    expect(document.body.style.backgroundColor).toBe('white')

    fireEvent.click(button)
    expect(document.body.style.backgroundColor).toBe('black')
  });
});

