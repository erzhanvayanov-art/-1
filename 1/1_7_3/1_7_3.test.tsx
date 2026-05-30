import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RecipeList from "./App"; 
import * as AppModule from "./App"; 

describe("RecipeList — извлечён компонент Recipe", () => {
  it("отображает все рецепты и ингредиенты корректно, а компонент Recipe экспортирован и используется", () => {
    expect(AppModule.Recipe).toBeDefined();
    expect(typeof AppModule.Recipe).toBe("function");

    render(<RecipeList />);

    expect(screen.getByText("Recipes")).toBeInTheDocument();
    ["Greek Salad", "Hawaiian Pizza", "Hummus"].forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
   
    expect(screen.getByText("feta")).toBeInTheDocument();
    expect(screen.getByText("pineapple")).toBeInTheDocument();
    expect(screen.getByText("tahini")).toBeInTheDocument();

    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings).toHaveLength(3);
  });
});