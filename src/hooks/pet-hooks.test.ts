import { describe, expect, it } from "vitest";
import { renderHook, waitFor } from "../utils/test-utils";
import { usePets } from "./pet-hooks";
import { charizard, pikachu } from "../mocks/handlers/pet";

describe("usePets", () => {
  it("returns a list of pets", async () => {
    const { result } = renderHook(() => usePets());
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual([pikachu, charizard]);
  });
});