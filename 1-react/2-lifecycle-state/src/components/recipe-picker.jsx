import { useEffect, useState } from "react";

const RecipePicker = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(1);

  // ComponentDidUpdate: fonksiyon index değeri her değiştiğinde çalışır
  useEffect(() => {
    setIsLoading(true);

    // String içerisine js değişkeni yazılcaksa: backtick `${}`
    fetch(`https://dummyjson.com/recipes/${index}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [index]); // bağımlılık dizisine index state'ini ekledik

  if (isLoading) return <b>Loader....</b>;

  if (error) return <b>{error}</b>;

  return (
    <div>
      <div>
        <h2>{recipe.name}</h2>

        <img src={recipe.image} width={300} />
        <h3>Mutfak: {recipe.cuisine}</h3>
        <h3>Zorluk: {recipe.difficulty}</h3>
        <h3>Süre: {recipe.prepTimeMinutes}</h3>
        <h3>Rating: {recipe.rating}</h3>
      </div>

      <div>
        <button disabled={index === 1} onClick={() => setIndex(index - 1)}>
          Önceki
        </button>
        <h1>{index}</h1>
        <button onClick={() => setIndex(index + 1)}>Sonraki</button>
      </div>
    </div>
  );
};

export default RecipePicker;
