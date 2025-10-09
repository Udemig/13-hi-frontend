"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = () => {
    setIsLoading(true);

    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        Error: {error} <button onClick={fetchRecipes}>Tekrar Dene</button>
      </div>
    );

  return (
    <div>
      <h1>Tarifler (Client Components)</h1>

      {recipes.map((recipe) => (
        <div key={recipe.id} className="flex gap-5 mt-5 p-5 rounded-md border">
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={150}
            height={150}
          />

          <div>
            <h1>{recipe.name}</h1>
            <h1>{recipe.cuisine}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
