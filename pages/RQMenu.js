import { useQuery } from "react-query";
import axios from "axios";

export const RQMenu = ({ tokenData, menu_id }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${tokenData}`,
    },
  };
  const url = `https://api-staging.finedinemenu.com/v2/static-menu/menu/${menu_id}`;
  const { isLoading, data } = useQuery("menu-data", () => {
    return axios.get(url, config);
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {console.log(
        data?.data.map((compass) => {
          return <div>{console.log(compass.id)}</div>;
        })
      )}
    </>
  );
};
export default RQMenu;
