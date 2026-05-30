import { it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TrafficLight from "./App";


  it("should toggle between Walk and Stop states", () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})

  render(<TrafficLight />)

  const button = screen.getByRole('button', { name: /change to/i })

  expect(screen.getByText('Walk')).toBeInTheDocument()
  expect(button).toHaveTextContent('Change to Stop')

  fireEvent.click(button)
  expect(alertSpy).toHaveBeenCalledWith('Stop is next')
  expect(screen.getByText('Stop')).toBeInTheDocument()

  fireEvent.click(button)
  expect(alertSpy).toHaveBeenCalledWith('Walk is next')
  expect(screen.getByText('Walk')).toBeInTheDocument()

  fireEvent.click(button)
  expect(alertSpy).toHaveBeenCalledWith('Stop is next')

  expect(alertSpy).toHaveBeenCalledTimes(3)

  alertSpy.mockRestore()
})

