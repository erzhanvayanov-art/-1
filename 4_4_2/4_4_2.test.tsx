import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Рефакторинг без лишних эффектов", () => {
  it("компонент TodoList НЕ использует useEffect", () => {
    const filePath = path.resolve(__dirname, "App.tsx");
    const code = fs.readFileSync(filePath, "utf-8");

    expect(code).not.toMatch(/useEffect\s*\(/);

    expect(code).not.toMatch(/setVisibleTodos/);
  });
});
