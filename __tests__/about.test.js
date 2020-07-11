import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import About from '../src/components/about'

it("renders services page", () => {
  const about = {
    name: "Ali Masyhur",
    github: "github.com/alimasyhur",
    company: "Keller Williams Realty Inc",
    sex: "Male",
    roles: ["Backend Engineer", "Frontend Engineer", "Fullstack Engineer"],
    skills: ["React", "Nodejs", "Typescript", "Laravel", "Golang"],
  };

  const { getByText } = render(<About about={about} />);
  expect(getByText("About Me")).toBeInTheDocument();
});
