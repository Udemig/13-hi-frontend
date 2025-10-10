import delay from "@/utils/delay";
import { fetchRecipes } from "@/utils/service";
import Image from "next/image";
import Link from "next/link";

// statik bir sayfayı tamamen dinamik yapmak için kullanılır
// export const dynamic = "force-dynamic";

// statik bir sayfanın içeriğini hangi sıklıkla güncelleneceğini belirler
export const revalidate = 60;

const Page = async () => {
  await delay(2000);
  const data = await fetchRecipes();

  return (
    <div>
      <h1>Tarifler (Server Components)</h1>

      {data.recipes.map((recipe) => (
        <Link
          href={`/recipes-server/${recipe.id}`}
          key={recipe.id}
          className="flex gap-5 mt-5 p-5 rounded-md border"
        >
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
        </Link>
      ))}
    </div>
  );
};

export default Page;
