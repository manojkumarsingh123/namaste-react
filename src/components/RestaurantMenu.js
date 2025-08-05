import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router"; // this is used to get the parameters from the URL
const RestaurantMenu = () => {
  const { resId } = useParams(); // this is used to get the restaurant id from the URL
  console.log("resId", resId);
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const res = await fetch("https://pastebin.com/raw/0QcdEDBL");
    const data = await res.json();
    console.log(data);
    console.log(
      "resInfo",
      data?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants[0]
        .info.name
    );
    setResInfo(data);
  };
  const name =
    resInfo?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants[0]
      .info.name;
  const cuisines =
    resInfo?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants[0]
      .info.cuisines;
  console.log("name", name);
  console.log("cuisines", cuisines);
  if (resInfo === null) {
    return <Shimmer />;
  }
  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h1>{cuisines.join(",")}</h1>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
