import { expect, it } from "vitest";
import { Pets } from "./Pets";
import { render, screen } from "../../utils/test-utils";

it("renders", () => {
  render(<Pets />);
});

it("shows the list of pets", async () => {
  render(<Pets />);
  expect(await screen.findByRole("listitem", { name: "Pikachu" })).toBeInTheDocument();
  expect(screen.getByRole("listitem", { name: "Charizard" })).toBeInTheDocument();
});