import RestaurantCard from "./RestaurantCard ";
import resObject from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//body component
const Body = () => {
  const [listOfRestaurant, setResObject] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://pastebin.com/raw/0QcdEDBL");
    const json = await data.json();
    console.log("json", json);
    setResObject(
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log("search button clicked", searchText);
              const filteredRestaurant = listOfRestaurant.filter((restaurant) =>
                restaurant.info.name.includes(searchText)
              );
              console.log("filteredRestaurant", filteredRestaurant);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.info.avgRating > 4.1
            );
            setResObject(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
