import delay from "@/utils/delay";
import { fetchRecipe, fetchRecipes } from "@/utils/service";
import Image from "next/image";
import Link from "next/link";

// bu dinamik sayfanın bazı parametrelerini statik hale getirelim
// bu donksiyondan return edilen parametre dizisindeki her bir eleman için statik bir sayfa oluşur
export const generateStaticParams = async ({ params }) => {
  const data = await fetchRecipes();

  return data.recipes.map((recipe) => ({ id: String(recipe.id) }));
};

const Page = async ({ params }) => {
  const { id } = await params;
  await delay(2000);
  const recipe = await fetchRecipe(id);

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div className="flex justify-start w-full">
        <Link href="/recipes-server" className="text-blue-500 underline">
          {"<"} Geri
        </Link>
      </div>

      <h1>{recipe.name}</h1>
      <Image
        src={recipe.image}
        alt={recipe.name}
        width={300}
        height={300}
        className="rounded-md"
      />

      <div>
        <h2>Mutfak</h2>
        <p className="text-xl">{recipe.cuisine}</p>
      </div>

      <div>
        <h2>Açıklama</h2>
        <p className="text-xl">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default Page;
