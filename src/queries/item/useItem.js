import { useQuery } from "react-query";
import itemService from "../../services/item.service";

const useItem = (itemId) => {
  return useQuery(["items", itemId], () => itemService.getById(itemId));
};

export default useItem;
