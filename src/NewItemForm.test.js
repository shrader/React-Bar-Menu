import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import React from "react";
import NewItemForm from "./NewItemForm";

it("matches snapshot", function () {
  const { container } = render(<NewItemForm />);
  expect(container).toMatchSnapshot();
 });