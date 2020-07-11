import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Contact from '../src/components/contact'

it("renders contact page", () => {
  const { getByText } = render(<Contact />);
  expect(getByText("Contact Me")).toBeInTheDocument();
});
