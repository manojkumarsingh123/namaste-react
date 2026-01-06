import { useState, useEffect } from "react";
import { MENU_API_URL, IMG_CDN_URL } from "../utils/constants";
import { RestaurantMenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MdStarRate } from "react-icons/md";
import { useParams } from "react-router-dom";
// import "../styles/RestaurantMenu.css";

const RestaurantMenu = () => {
  console.log("Reached to RestaurantMenu Component");

  //Lets separate fetching data in separate custom hook and just use the result instead of calling the api resmenu component job only to show the data not fetch the data
  // const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);

  // const fetchMenusData = async () => {
  //   try {
  //     const data = await fetch(MENU_API_URL + resId);
  //     console.log("data", data);
  //     const json = await data.json();
  //     console.log("JSON", json);

  //     setRestaurantInfo(json?.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchMenusData();
  // }, []);

  if (restaurantInfo === null) {
    return <RestaurantMenuShimmer />;
  }

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const cards =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      <div className="restaurant-header">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        <div className="restaurant-header-details">
          <h1>{name}</h1>
          <h3>{locality}</h3>
          <p>{cuisines?.join(", ")}</p>
          <h4 className="rating-time">
            <div className="rating">
              <div
                style={{
                  backgroundColor:
                    Number(avgRatingString) >= 4 ? "green" : "red",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  display: "inline-block",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                <span>
                  {avgRatingString || 3.8} (
                  {totalRatingsString || "1K+ ratings"})
                </span>
              </div>
            </div>

            <span>|</span>
            <span className="time">{sla?.slaString}</span>
          </h4>
        </div>
      </div>

      {itemCards.length ? (
        itemCards.map((item) => {
          const {
            id,
            name,
            price,
            defaultPrice,
            ratings,
            imageId,
            description,
          } = item.card.info;
          return (
            <div key={id} className="menu-items">
              <div className="left">
                <h2>{name}</h2>
                <h4>₹{price / 100 || defaultPrice / 100}</h4>
                <p>{(description && description.slice(0, 60)) || "Dummy"}</p>
                <h4 className="rating">
                  {/* <MdStarRate
                    className="rating-logo"
                    style={{
                      backgroundColor:
                        ratings?.aggregatedRating?.rating >= 4.0
                          ? "var(--green)"
                          : "var(--red)",
                    }}
                  /> */}
                  <span>
                    {ratings?.aggregatedRating?.rating || 3.8} (
                    {ratings?.aggregatedRating?.ratingCountV2 || 6})
                  </span>
                </h4>
              </div>
              <div className="right">
                <img src={IMG_CDN_URL + imageId} alt={name} />
                <button className="add-btn">ADD</button>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No items available</h2>
      )}
    </div>
  );
};

export default RestaurantMenu;
