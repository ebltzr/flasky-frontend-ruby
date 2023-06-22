import "./Restaurant.css";
import PropTypes from "prop-types";

// const Restaurant = (props) => {
//   const restaurantName = props.name;
//   const cuisine = props.cuisine;
//   const rating = props.rating;
//   const distance = props.distance;
//   const updateRating = props.updateRating;
//   const deleteRestaurant = props.deleteRestaurant;

const Restaurant = ({
  id,
  name,
  cuisine,
  rating,
  distance,
  updateRating,
  deleteRestaurant,
}) => {
  // const [updateRating, setRating] = useState(rating);

  const determineColor = () => {
    if (updateRating > 5) {
      return "high-rating";
    } else {
      return "rating";
    }
  };

  return (
    <div>
      <h2 className="restaurant-title"> {name} </h2>
      <ul>
        <li> Cuisine: {cuisine} </li>
        <li className={determineColor()}> Rating: {rating} </li>
        <button
          onClick={() => {
            updateRating(id, rating, "up");
          }}
        >
          Upvote
        </button>
        <button
          onClick={() => {
            updateRating(id, rating, "down");
          }}
        >
          Downvote
        </button>
        <button
          onClick={() => {
            deleteRestaurant(id);
          }}
        >
          Delete
        </button>
        <li> Distance from Ada: {distance} </li>
      </ul>
    </div>
  );
};

Restaurant.propTypes = {
  name: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
  updateRating: PropTypes.func.isRequired,
  deleteRestaurant: PropTypes.func.isRequired,
};

export default Restaurant;
