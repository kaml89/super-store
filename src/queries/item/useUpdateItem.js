import { useMutation, useQueryClient } from "react-query";
import itemService from "../../services/item.service";

const useUpdateItem = () => {
  const queryClient = useQueryClient();
  return useMutation((updatedItem) => itemService.update(updatedItem), {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
  });
};

export default useUpdateItem;
