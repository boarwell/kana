import { test, expect } from "bun:test";
import { hira2kata, hira2kataAll, kata2hira, kata2hiraAll } from "./main.js";

type Case = {
  input: string;
  expected: string;
};

test("hira2kata", () => {
  const cases: Case[] = [
    { input: "あ", expected: "ア" },
    { input: "を", expected: "ヲ" },
    { input: "こ", expected: "コ" },
    { input: "z", expected: "Ú" },
    { input: "愛", expected: "慻" },
  ];

  for (const { expected, input } of cases) {
    expect(hira2kata(input)).toBe(expected);
  }
});

test("hira2kataAll", () => {
  const cases: Case[] = [
    { input: "こんにちは", expected: "コンニチハ" },
    { input: "今日は", expected: "今日ハ" },
    { input: "GoとRust", expected: "GoトRust" },
  ];

  for (const { expected, input } of cases) {
    expect(hira2kataAll(input)).toBe(expected);
  }
});

test("kata2hira", () => {
  const cases: Case[] = [
    { input: "ア", expected: "あ" },
    { input: "ヲ", expected: "を" },
    { input: "コ", expected: "こ" },
    { input: "Ú", expected: "z" },
    { input: "慻", expected: "愛" },
  ];

  for (const { expected, input } of cases) {
    expect(kata2hira(input)).toBe(expected);
  }
});

test("kata2hiraAll", () => {
  const cases: Case[] = [
    { input: "コンニチハ", expected: "こんにちは" },
    { input: "今日ハ", expected: "今日は" },
    { input: "GoトRust", expected: "GoとRust" },
  ];

  for (const { input, expected } of cases) {
    expect(kata2hiraAll(input)).toBe(expected);
  }
});
