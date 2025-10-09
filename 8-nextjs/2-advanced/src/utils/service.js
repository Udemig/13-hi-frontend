export const fetchRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    cache: "force-cache", // default cache: "force-cache"
  });

  return res.json();
};
