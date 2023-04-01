import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Recipe = ({ search }) => {
  let [meals, setMeals] = useState([]);

  const fetchMeals = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((response) => setMeals(response.data.meals));
  };

  useEffect(fetchMeals, [search]);
  return (
    <div className="meals-container">
      {meals && meals.slice(0, 12).map((meal) => <Card meal={meal} key={meal.idMeal} />)}
    </div>
  );
};

export default Recipe;