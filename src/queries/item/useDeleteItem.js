import { useMutation, useQueryClient } from "react-query";
import itemService from "../../services/item.service";

const useDeleteItem = () => {
  const queryClient = useQueryClient();
  return useMutation((id) => itemService.remove(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
  });
};

export default useDeleteItem;
