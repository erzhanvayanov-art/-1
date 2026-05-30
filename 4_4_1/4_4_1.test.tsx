import fs from "fs";
import path from "path";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./App"; 

vi.mock("./todos", async () => {
  const actual = await vi.importActual<typeof import("./todos")>("./todos");
  return {
    ...actual,
    createTodo: (text: string, completed = false) => ({
      id: Math.floor(Math.random() * 100000000),
      text,
      completed,
    }),
  };
});

describe("TodoList — Transform data without Effects", () => {
  it("должен проходить весь комплекс проверок после рефакторинга без useEffect", async () => {
    const user = userEvent.setup();

    render(<TodoList />);

    expect(screen.getByText("Get apples")).toBeInTheDocument();
    expect(screen.getByText("Get oranges")).toBeInTheDocument();
    expect(screen.getByText("Get carrots")).toBeInTheDocument();

    expect(screen.getByText("Get apples").closest("s")).not.toBeNull();
    expect(screen.getByText("Get oranges").closest("s")).not.toBeNull();
    expect(screen.getByText("Get carrots").closest("s")).toBeNull();

    expect(screen.getByText(/1 todos left/i)).toBeInTheDocument();

    const input = screen.getByRole("textbox");
    const addButton = screen.getByRole("button", { name: /add/i });

    await user.type(input, "Купить молоко");
    await user.click(addButton);

    expect(screen.getByText("Купить молоко")).toBeInTheDocument();
    expect(screen.getByText(/2 todos left/i)).toBeInTheDocument();
    expect(input).toHaveValue("");

    const checkbox = screen.getByRole("checkbox", {
      name: /show only active todos/i,
    });

    await user.click(checkbox);

    expect(screen.queryByText("Get apples")).not.toBeInTheDocument();
    expect(screen.queryByText("Get oranges")).not.toBeInTheDocument();
    expect(screen.getByText("Get carrots")).toBeInTheDocument();
    expect(screen.getByText("Купить молоко")).toBeInTheDocument();
    expect(screen.getByText(/2 todos left/i)).toBeInTheDocument(); 

    await user.click(checkbox);

    expect(screen.getByText("Get apples")).toBeInTheDocument();
    expect(screen.getByText("Get oranges")).toBeInTheDocument();
    expect(screen.getByText("Get carrots")).toBeInTheDocument();
    expect(screen.getByText("Купить молоко")).toBeInTheDocument();

    const filePath = path.resolve(__dirname, "App.tsx"); 
    let code;
    try {
      code = fs.readFileSync(filePath, "utf-8");
    } catch (err) {
      throw new Error(
        `Не удалось прочитать файл ${filePath}. Проверьте путь к файлу!`
      );
    }

    expect(code).not.toMatch(/useEffect\s*\(/);
    expect(code).not.toMatch(/setActiveTodos/);
    expect(code).not.toMatch(/setVisibleTodos/);
    expect(code).not.toMatch(/setFooter/);
  });
});