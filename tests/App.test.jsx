import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "../src/App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
