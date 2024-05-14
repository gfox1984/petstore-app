import { useQuery } from "@tanstack/react-query";
import { petApi } from "../api";
import { FindPetsByStatusStatus } from "../api/petstore";

const allStatuses: FindPetsByStatusStatus[] = ["available", "pending", "sold"];

export function usePets(status = allStatuses) {
  return useQuery({
    queryKey: ["pet", "findPetsByStatus", status],
    queryFn: async () => (await petApi.findPetsByStatus({ status })).data,
  });
}