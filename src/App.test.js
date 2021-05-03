import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

it("matches snapshot", function () {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
 });