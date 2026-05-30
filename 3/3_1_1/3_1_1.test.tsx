import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Picture from "./App";

describe("Picture", () => {
  it("should toggle classes on image and background click", () => {
    const { container } = render(<Picture />);

    const img = screen.getByAltText("Rainbow houses in Kampung Pelangi, Indonesia");
    const background = container.querySelector(".background");
    expect(background).toHaveClass("background--active");
    expect(img).not.toHaveClass("picture--active");

    fireEvent.click(img);

    expect(background).not.toHaveClass("background--active");
    expect(img).toHaveClass("picture--active");

    fireEvent.click(background!);

    expect(background).toHaveClass("background--active");
    expect(img).not.toHaveClass("picture--active");

    
  });

});
