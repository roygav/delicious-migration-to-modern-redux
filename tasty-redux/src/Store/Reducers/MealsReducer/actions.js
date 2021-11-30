export const SET_MEALS = "SET_MEALS";
export const GET_MEALS = "GET_MEALS";
export const GET_MEALS_FAILURE = "GET_MEALS_FAILURE";

export function setMeals(meals) {
  return {
    type: SET_MEALS,
    payload: meals,
  };
}

export const getMeals = () => ({
  type: GET_MEALS,
});

export const getMealsFailure = () => ({
  type: GET_MEALS_FAILURE,
});

export function fetchMeals(ingredient) {
  return async (dispatch) => {
    if (!ingredient) {
      dispatch(setMeals());
    } else {
      dispatch(getMeals());

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();

        dispatch(setMeals(data));
      } catch (error) {
        dispatch(getMealsFailure());
      }
    }
  };
}
