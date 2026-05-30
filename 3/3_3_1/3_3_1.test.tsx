import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SyncedInputs from "./App";

describe("SyncedInputs", () => {
  it("should sync both inputs and display synchronized value", () => {
    render(<SyncedInputs />);

    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    const firstInput = inputs[0];
    const secondInput = inputs[1];

    fireEvent.change(firstInput, { target: { value: "test" } });

    expect(firstInput.value).toBe("test");
    expect(secondInput.value).toBe("test");


    fireEvent.change(secondInput, { target: { value: "sync" } });

    expect(firstInput.value).toBe("sync");
    expect(secondInput.value).toBe("sync");

    const input = screen.getAllByRole("textbox")[0] as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello" } });


    const paragraph = screen.getByText("Synchronized value:").parentElement!;
    expect(paragraph).toHaveTextContent("Synchronized value: hello");
  });


});
