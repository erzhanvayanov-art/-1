import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Form with hint", () => {
  it("should preserve textarea value when toggling hint", () => {
    render(<App />);

    
    let textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "Paris" } });
    expect(textarea.value).toBe("Paris");

    fireEvent.click(screen.getByText("Show hint"));
    textarea = screen.getByRole("textbox") as HTMLTextAreaElement; 
    expect(textarea.value).toBe("Paris"); 

    
    fireEvent.click(screen.getByText("Hide hint"));
    textarea = screen.getByRole("textbox") as HTMLTextAreaElement; 
    expect(textarea.value).toBe("Paris"); 
  });
});
