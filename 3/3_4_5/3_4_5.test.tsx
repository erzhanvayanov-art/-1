import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import ContactList from "./App";

describe("ContactList with reverse order and expanded state", () => {
  it("should preserve expanded state when reversing and reverse order correctly", () => {
    render(<ContactList />);

    const getContactLi = (name: string) =>
      screen.getAllByRole("listitem").find(li =>
        within(li).queryByText((content) => content.includes(name))
      ) as HTMLElement;

    const aliceLi = getContactLi("Alice");
    const bobLi = getContactLi("Bob");
    const taylorLi = getContactLi("Taylor");

    expect(aliceLi).toBeDefined();
    expect(bobLi).toBeDefined();
    expect(taylorLi).toBeDefined();

    const listBefore = screen.getAllByRole("listitem");
    expect(listBefore[0]).toBe(aliceLi);
    expect(listBefore[2]).toBe(taylorLi);

    const aliceButton = within(aliceLi).getByText(/Show email/);
    fireEvent.click(aliceButton);

    expect(within(aliceLi).getByText("alice@mail.com")).toBeInTheDocument();

    const checkbox = screen.getByLabelText(/Show in reverse order/);
    fireEvent.click(checkbox);
    const listAfter = screen.getAllByRole("listitem");
    const firstLiAfter = listAfter[0];
    const lastLiAfter = listAfter[listAfter.length - 1];

    expect(within(firstLiAfter).queryByText(/Taylor/)).toBeInTheDocument();
    expect(within(lastLiAfter).queryByText(/Alice/)).toBeInTheDocument();

    const aliceLiAfter = getContactLi("Alice");
    expect(within(aliceLiAfter).getByText("alice@mail.com")).toBeInTheDocument();
    expect(screen.getByText(/Bob/)).toBeInTheDocument();
    expect(screen.getByText(/Taylor/)).toBeInTheDocument();
    expect(screen.getByText(/Alice/)).toBeInTheDocument();
  });
});
