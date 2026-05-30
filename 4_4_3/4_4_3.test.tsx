import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("4_4_3 — Проверка рефакторинга EditContact", () => {
  const filePath = path.resolve(__dirname, "EditContact.tsx"); 

  let code: string;

  beforeAll(() => {
    code = fs.readFileSync(filePath, "utf-8");
  });

  it("useEffect полностью удалён", () => {
    expect(code).not.toMatch(/useEffect\s*\(/);
  });

  it("сброс формы реализован через key на дочернем компоненте или форме", () => {
   
    const hasKeyWithId = /key\s*=\s*\{[^}]*id[^}]*\}/.test(code);

    expect(hasKeyWithId, "Не найден key с использованием id").toBe(true);

    expect(code, "key должен использовать id контакта").toMatch(
      /key\s*=\s*\{[^}]*\.id[^}]*\}/
    );
  });
});
