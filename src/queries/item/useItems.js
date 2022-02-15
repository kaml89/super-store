import { useQuery } from "react-query";
import itemService from "../../services/item.service";

const useItems = () => {
  return useQuery("items", itemService.get);
};

export default useItems;
