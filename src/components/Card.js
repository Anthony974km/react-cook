import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <h3>{meal.strMeal}</h3>
      <span>Origine : {meal.strArea}</span>
      <img src={meal.strMealThumb} alt={"image " + meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
