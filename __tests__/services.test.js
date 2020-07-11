import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render } from "@testing-library/react";
import Services from "../src/components/services";
it("renders services page", () => {
  const services = [
    "Building Company Website",
    "Building Personal Website",
    "Building REST API with Laravel, Nodejs and Golang",
    "Software Architect",
    "DevOps Lead Engineer",
  ];

  const { getByText } = render(<Services services={services} />);
  expect(getByText("I provide some of service:")).toBeInTheDocument();
});
