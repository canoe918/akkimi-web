import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./users";

export default function useUsersQuery() {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
}
