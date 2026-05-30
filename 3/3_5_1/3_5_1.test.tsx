import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Messenger from "./App";

describe("Messenger with reducer", () => {
  it("should switch contact and clear message", () => {
    render(<Messenger />);

    
    const textarea = screen.getByPlaceholderText(/Chat to Taylor/) as HTMLTextAreaElement;
    expect(textarea.value).toBe("Hello");

    fireEvent.change(textarea, { target: { value: "Hi Taylor" } });
    expect(textarea.value).toBe("Hi Taylor");

   
    const aliceButton = screen.getByText("Alice");
    fireEvent.click(aliceButton);

    const textareaAlice = screen.getByPlaceholderText(/Chat to Alice/) as HTMLTextAreaElement;
    expect(textareaAlice.value).toBe(""); 

   
    fireEvent.change(textareaAlice, { target: { value: "Hello Alice" } });
    expect(textareaAlice.value).toBe("Hello Alice");

    
    const taylorButton = screen.getByText("Taylor");
    fireEvent.click(taylorButton);

    const textareaTaylor = screen.getByPlaceholderText(/Chat to Taylor/) as HTMLTextAreaElement;
    expect(textareaTaylor.value).toBe(""); 
  });
});
