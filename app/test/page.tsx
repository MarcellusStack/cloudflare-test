import Link from "next/link";
import { RevalidateBtn } from "./_components/revalidate-btn";

export const runtime = "edge";

export const revalidate = 30;

export default async function Page() {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    {
      next: { tags: ["cocktail"] },
    }
  );
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Test Api</h1>
      <p>{data.drinks[0].strDrink}</p>
      <RevalidateBtn />
      <Link href="/">Back to Home</Link>
    </main>
  );
}
