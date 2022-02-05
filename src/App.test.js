import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Login", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("function should return addition", () => {
    expect(2 + 2).not.toBe(5);
  });
});
