import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MailClient from "./App";

describe("MailClient", () => {

  it("keeps highlight when toggling star", () => {
    render(<MailClient />);


    fireEvent.pointerMove(screen.getAllByRole("listitem")[0]);
    expect(screen.getAllByRole("listitem")[0]).toHaveClass("highlighted");


    const unstarButton = screen.getByText("Unstar");
    fireEvent.click(unstarButton);

    const firstLetterAfterUpdate = screen.getAllByRole("listitem")[0];
    expect(firstLetterAfterUpdate).toHaveClass("highlighted");
  });

});
