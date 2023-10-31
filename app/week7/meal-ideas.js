import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
}

async function fetchMealDetails(mealId) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0];
}

export default function MealIdea({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [expendedMeal, setExpendedMeal] = useState(null);
  
  const handleMealClick = async (mealId) => {
    if (expendedMeal && expendedMeal.idMeal === mealId) {
        setExpendedMeal(null);
    }

    else {
        const meal = await fetchMealDetails(mealId);
        setExpendedMeal(meal);
    }
}

  useEffect(() => {
    async function loadMealIdeas() {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <main>
        <h1 class="p-2 m-4 max-w-sm text-xl font-bold text-blue-900 text-center">
            Meal Ideas for {ingredient.charAt(0).toUpperCase() + ingredient.slice(1).toLowerCase()}
        </h1>

        {meals && meals.length > 0 ? (
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <li onClick={() => handleMealClick(meal.idMeal)} class="font-mono font-bold text-md p-2 ml-4 mb-1 bg-sky-400 max-w-sm border-x-4 border-y-4 text-white cursor-pointer hover:bg-blue-500">
                            {meal.strMeal}

                            {expendedMeal && expendedMeal.idMeal === meal.idMeal && (
                                <main class="font-mono text-xs p-2">
                                    <strong>Ingredients needed:</strong>
                                    <ul class="list-disc pl-5">
                                        {Array.from({length:20}).map((_, index) => {
                                            const ingredientName = expendedMeal[`strIngredient${index + 1}`];
                                            const ingredientMeasure = expendedMeal[`strMeasure${index + 1}`];
                                            if (ingredientName && ingredientName.trim() !== "") {
                                                return (
                                                    <li key={ingredientName}>
                                                    {`${ingredientName} (${ingredientMeasure})`}
                                                    </li>
                                                )
                                            }
                                            return null;
                                        })}
                                    </ul>
                                </main>
                            )}
                        </li>
                    </li>
                ))}
            </ul>
        ) : (

        <p class="font-mono text-md p-3 m-4 bg-sky-400 max-w-sm border-x-8 border-y-8 text-white">
            No meals found for this ingredient.
        </p>
        
        )}
    </main>
  );
}