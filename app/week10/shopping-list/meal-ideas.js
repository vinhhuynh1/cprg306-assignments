" use client ";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
};

const fetchMealDetails = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0];
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [expandedMeal, setExpandedMeal] = useState(null);

    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };

    const handleMealClick = async (mealId) => {
        if (expandedMeal && expandedMeal.idMeal === mealId) {
            setExpandedMeal(null);
        } else {
            const mealDetails = await fetchMealDetails(mealId);
            setExpandedMeal(mealDetails);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

  return (
    <main>
        <h1 class="p-2 max-w-sm text-xl font-bold text-blue-900 text-center">
            Meal Ideas for {ingredient.charAt(0).toUpperCase() + ingredient.slice(1).toLowerCase()}
        </h1>

        {meals && meals.length > 0 ? (
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <li onClick={() => handleMealClick(meal.idMeal)} class="font-mono font-bold text-md p-2 ml-4 mb-1 bg-sky-400 max-w-sm border-x-4 border-y-4 text-white cursor-pointer hover:bg-blue-500">
                            {meal.strMeal}

                            {expandedMeal && expandedMeal.idMeal === meal.idMeal && (
                                <main class="font-mono text-xs p-2">
                                    <strong>Ingredients needed:</strong>
                                    <ul class="list-disc pl-5 font-normal">
                                        {Array.from({length:20}).map((_, index) => {
                                            const ingredientName = expandedMeal[`strIngredient${index + 1}`];
                                            const ingredientMeasure = expandedMeal[`strMeasure${index + 1}`];
                                            if (ingredientName && ingredientName.trim() !== "") {
                                                return (
                                                    <li key={ingredientName}>
                                                    {ingredientName} ({ingredientMeasure})
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