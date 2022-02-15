import { useQuery } from "react-query";
import userService from "../../services/user.service";

const useUsers = () => {
  return useQuery("users", userService.get);
};

export default useUsers;
