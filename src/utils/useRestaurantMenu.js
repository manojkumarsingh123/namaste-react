import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  // fetch the data

  const [resInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    console.log("data", data);
    const json = await data.json();
    setRestaurantInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
