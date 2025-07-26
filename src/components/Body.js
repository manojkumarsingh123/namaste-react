import RestaurantCard from "./RestaurantCard ";
import resObject from "../utils/mockData";
import { useState } from "react";

//body component
const Body = () => {
  const [listOfRestaurant, setResObject] = useState(resObject);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setResObject(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
