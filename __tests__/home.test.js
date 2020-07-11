import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Home from '../src/components/home'

it("home page", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Ali Masyhur")).toBeInTheDocument();
});
