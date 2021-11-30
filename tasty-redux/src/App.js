import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { fetchMeals } from "./Store/Reducers/MealsReducer/actions";
import Loader from "react-loader-spinner";
import "./App.css";

const propTypes = {
  meals: PropTypes.object,
  loading: PropTypes.bool,
  showError: PropTypes.bool,
};

const defaultProps = {
  meals: {},
  loading: false,
  showError: false,
};

function App({ meals, loading, showError }) {
  const dispatch = useDispatch();

  const loadMeals = (e) => {
    dispatch(fetchMeals(e.target.value));
  };

  const { meals: mealsList } = meals;

  return (
    <div className="App">
      <header className="App-header">Tasty</header>
      <section className="App-body">
        <select
          name="choice"
          id="meal-select"
          className="ingredient-select"
          defaultValue=""
          onChange={loadMeals}
        >
          <option value="">Select ingredient</option>
          <option value="beef">Beef</option>
          <option value="chicken">Chicken</option>
          <option value="mushrooms">Mushrooms</option>
          <option value="butter">Butter</option>
          <option value="garlic">Garlic</option>
          <option value="salt">Salt</option>
          <option value="onion">Onion</option>
        </select>
        <Loader
          type="Puff"
          color="rgba(59, 153, 252, 0.7)"
          height={250}
          width={250}
          timeout={3000}
          visible={loading}
        />
        <div className="error-message">
          {showError ? "Something went wrong 🙁" : ""}
        </div>
        <div className="meals-wrapper">
          {mealsList?.map((meal) => {
            return (
              <span key={meal.idMeal} className="meal-card">
                <div>{meal.strMeal}</div>
                <img
                  className="meal-image"
                  alt={meal.strMeal}
                  title={meal.strMeal}
                  src={meal.strMealThumb}
                ></img>
              </span>
            );
          })}
        </div>
      </section>
    </div>
  );
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  meals: state?.mealsData?.meals,
  loading: state?.mealsData?.loading,
  showError: state?.mealsData?.showError,
});

export default connect(mapStateToProps)(App);
