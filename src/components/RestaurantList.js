import Restaurant from "./Restaurant";
import PropTypes from "prop-types";

const RestaurantList = (props) => {
  const restaurantComponents = props.data.map((restaurant) => {
    return (
      <Restaurant
        key={restaurant.id}
        id={restaurant.id}
        name={restaurant.name}
        cuisine={restaurant.cuisine}
        rating={restaurant.rating}
        distance={restaurant.distance_from_ada}
        updateRating={props.updateRating}
        deleteRestaurant={props.deleteRestaurant}
      />
    );
  });

  return (
    <div>
      <h1> Restaurant List </h1>
      {restaurantComponents}
    </div>
  );
};

RestaurantList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cuisine: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      distance_from_ada: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateRating: PropTypes.func.isRequired,
  deleteRestaurant: PropTypes.func.isRequired,
};

export default RestaurantList;