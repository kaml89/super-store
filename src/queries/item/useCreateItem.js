import { useMutation, useQueryClient } from "react-query";
import itemService from "../../services/item.service";

const useCreateItem = () => {
  const queryClient = useQueryClient();
  return useMutation((newItem) => itemService.create(newItem), {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
  });
};

export default useCreateItem;
