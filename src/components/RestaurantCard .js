import { CDN_URL } from "../utils/constants";
//restaurant card component
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resData", resData);
  const { name, cuisines, avgRating, cloudinaryImageId, locality } = resData;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h5>{name}</h5>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestaurantCard;
