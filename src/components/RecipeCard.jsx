import "./RecipeCard.css";

function RecipeCard() {
  return (
    <div className="recipe-card">
      <img
        className="recipe-image"
        src="chicken.jpg"
        alt="Chicken fried rice"
      />

      <h2>Chicken Fried Rice</h2>
      <p>Preparation time: 30 minutes</p>
    </div>
  );
}

export default RecipeCard;