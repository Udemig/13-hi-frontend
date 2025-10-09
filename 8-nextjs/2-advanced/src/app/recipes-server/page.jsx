import { fetchRecipes } from "@/utils/service";
import Image from "next/image";

const Page = async () => {
  const data = await fetchRecipes();

  return (
    <div>
      <h1>Tarifler (Server Components)</h1>

      {data.recipes.map((recipe) => (
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
